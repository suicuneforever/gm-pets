import { Owner, Pet } from '@prisma/client';
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { ListItem, PetImage, UnorderedList } from './Home.styled';
import AddPetForm from '../components/addPetForm/AddPetForm';

// query key - array? + useEffect
// loading vs fetching
// invalidating queries
// setting query state
// optimistic updates
// using useEffect w RQ
// debugging
// started branch and solution branch
// enabled key
// onSuccess, onError
// client state vs server state

// TODO
// add random button
// connect to firebase
// fix dev watch issue
// fix backend
// separate FE and BE

function Home() {
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

  // TODO
  const [petPhoto, setPetPhoto] = useState<Blob | Uint8Array | ArrayBuffer>(new Blob());
  const [showPetForm, setShowPetForm] = useState<boolean>(false);

  const petsQuery = useQuery<Pet[]>({
    queryKey: ['pets'],
    queryFn: () => axios.get('http://localhost:3000/pets').then((res) => res.data),
  });

  const randomPetQuery = useQuery<Pet>(['randomPet'], () =>
    axios.get('http://localhost:3000/pets/random').then((res) => res.data),
  );

  const addPetMutation = useMutation({
    mutationFn: (pet: Partial<Pet>) => axios.post('http://localhost:3000/pet', pet).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(['pets']);
    },
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setPetPhoto(files[0]);
    }
  };

  const handleSubmit = () => {
    const petPhotoRef = ref(firebaseStorage, 'TestPet');
    uploadBytes(petPhotoRef, petPhoto)
      .then(() => {
        getDownloadURL(petPhotoRef)
          .then((url) => {
            // FIX THIS
            const pet: Partial<Pet> = {
              name: 'TestPet',
              animal: 'Dog',
              breed: 'TestBreed',
              age: 1,
              photoUrl: url,
              ownerId: 1, // TODO
            };

            addPetMutation.mutate(pet);
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

  const handleRandomPet = () => {
    randomPetQuery.refetch();
  };

  const toggleAddPetForm = () => {
    setShowPetForm(!showPetForm);
  };

  if (petsQuery.isLoading) {
    return <span>Loading...</span>;
  }

  //   if (isError) {
  //     return <span>Error: {error.message}</span>;
  //   }

  return (
    <>
      {petsQuery.isLoading ? (
        <span>Loading...</span>
      ) : (
        <UnorderedList>
          {petsQuery.data?.map((pet) => (
            <ListItem key={pet.id}>
              <PetImage src={pet.photoUrl} />
            </ListItem>
          ))}
        </UnorderedList>
      )}
      <button onClick={handleRandomPet}>Random Pet</button>
      <span>Random pet: {randomPetQuery?.data?.name}</span>
      <input type="file" onChange={handlePhotoChange} />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <button onClick={toggleAddPetForm}>Add Pet</button>
      <AddPetForm isOpen={showPetForm} toggle={toggleAddPetForm} />
    </>
  );
}

export default Home;
