import { Pet } from '@prisma/client';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import {
  Column,
  ContainerShadow,
  ModalContainer,
  ModalOverlay,
  PetForm,
  PetPhoto,
  PhotoContainer,
  Row,
} from './AddPetForm.styled';
import useCreatePet from '../../hooks/useCreatePet';
import usePets from '../../hooks/usePets';

type AddPetFormProps = {
  isOpen: boolean;
  toggle: () => void;
};

type PetInput = {
  name: string;
  animal: string;
  breed: string;
  age: number;
  photoUrl: string;
  ownerId: number;
};

function AddPetForm({ isOpen, toggle }: AddPetFormProps) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDEh8CCteD_iFlx_0EaSPwporg0PqsVONc',
    authDomain: 'gm-pets.firebaseapp.com',
    projectId: 'gm-pets',
    storageBucket: 'gm-pets.appspot.com',
    messagingSenderId: '553933332765',
    appId: '1:553933332765:web:d8b040506feb5c706601f4',
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseStorage = getStorage(firebaseApp);

  const queryClient = useQueryClient();
  const { register, handleSubmit, watch, reset } = useForm<PetInput>();
  const [petPhotoUrl, setPetPhotoUrl] = useState<string>('');
  const [createPet, createPetInfo] = useCreatePet();
  const petsQuery = usePets();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      const file = files[0];

      const petPhotoRef = ref(firebaseStorage, uuidv4());
      uploadBytes(petPhotoRef, file, { contentType: 'image/jpeg' })
        .then(() => {
          getDownloadURL(petPhotoRef)
            .then((url) => {
              setPetPhotoUrl(url);
            })
            .catch((error) => {
              console.log(error.message, 'error getting photo url');
            });
        })
        .catch((error) => {
          console.log(error.message, 'error uploading photo');
        });
    }
  };

  const onSubmit = async (data: PetInput) => {
    const petToAdd: PetInput = {
      ...data,
      photoUrl: petPhotoUrl,
      ownerId: 1,
    };

    await createPet(petToAdd);
    petsQuery.fetch();
    onClose();

    //addPetMutation.mutate(petToAdd);
  };

  const onClose = () => {
    reset();
    setPetPhotoUrl('');
    toggle();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Add a pet</h2>
        <Row>
          <Column>
            <PetForm onSubmit={handleSubmit(onSubmit)}>
              <label>Pet Name</label>
              <input {...register('name')} />
              <label>Animal Type</label>
              <select {...register('animal')}>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Reptile">Reptile</option>
              </select>
              <label>Breed</label>
              <input {...register('breed')} />
              <label>Age</label>
              <input type="number" {...register('age')} />
              <br />
              <button type="submit">Submit</button>
            </PetForm>
          </Column>
          <Column>
            <input type="file" onChange={handlePhotoChange} />
            <PhotoContainer>
              <PetPhoto src={petPhotoUrl} />
            </PhotoContainer>
          </Column>
        </Row>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
      <ContainerShadow />
    </ModalOverlay>
  );
}

export default AddPetForm;
