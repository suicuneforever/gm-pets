import { Pet } from '@prisma/client';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { ModalContainer, ModalOverlay } from './AddPetForm.styled';

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
  const { register, handleSubmit, watch } = useForm<PetInput>();
  // TODO
  const [petPhoto, setPetPhoto] = useState<Blob | Uint8Array | ArrayBuffer>(new Blob());
  const [photoUrl, setPhotoUrl] = useState<string>('');

  const petName = watch('name');

  const addPetMutation = useMutation({
    mutationFn: (pet: Partial<Pet>) => axios.post('http://localhost:3000/pet', pet).then((res) => res.data),
    onSuccess: () => {
      toggle();
      queryClient.invalidateQueries(['pets']);
    },
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setPetPhoto(files[0]);
    }
  };

  const onSubmit: SubmitHandler<PetInput> = (data) => {
    const petPhotoRef = ref(firebaseStorage, petName);
    uploadBytes(petPhotoRef, petPhoto)
      .then(() => {
        getDownloadURL(petPhotoRef)
          .then((url) => {
            const petToAdd: PetInput = {
              ...data,
              photoUrl: url,
              ownerId: 1,
            };

            addPetMutation.mutate(petToAdd);
          })
          .catch((error) => {
            console.log(error.message, 'error getting photo url');
          });
        setPetPhoto(new Blob());
      })
      .catch((error) => {
        console.log(error.message, 'error uploading photo');
      });
  };

  if (isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={toggle}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="file" onChange={handlePhotoChange} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={toggle}>Close</button>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default AddPetForm;
