import { Pet } from '@prisma/client';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../backend/index';

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

function Home() {
  const queryClient = useQueryClient();
  const [petPhoto, setPetPhoto] = useState<File>();

  const petsQuery = useQuery<Pet[]>({
    queryKey: 'pets',
    queryFn: () => axios.get('http://localhost:8080/pets').then((res) => res.data),
  });

  const randomPetQuery = useQuery<Pet>('randomPet', () =>
    axios.get('http://localhost:8080/pets/random').then((res) => res.data),
  );
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setPetPhoto(files[0]);
    }
  }

  const handleSubmit = () => {
    const imageRef = ref(storage);
  }

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
        <ul>
          {petsQuery.data?.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      )}
      <span>Random pet: {randomPetQuery.data?.name}</span>
      <input type="file" onChange={handlePhotoChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Home;

// https://drive.google.com/uc?id=1_JA7hdd39rQS9wYII_s7WJIoUoNtRAwY
// https://drive.google.com/uc?id=1G-ISkg5WzwEcqUdsZIo47ubbHO4S4VM1
