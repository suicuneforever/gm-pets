import { Pet } from '@prisma/client';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

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

  const [url, setUrl] = useState<string>('');
  const [petPhoto, setPetPhoto] = useState<Blob | Uint8Array | ArrayBuffer>(new Blob());

  const petsQuery = useQuery<Pet[]>({
    queryKey: 'pets',
    queryFn: () => axios.get('http://localhost:3000/pets').then((res) => res.data),
  });

  const randomPetQuery = useQuery<Pet>('randomPet', () =>
    axios.get('http://localhost:3000/pets/random').then((res) => res.data),
  );

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      setPetPhoto(files[0]);
    }
  };

  const handleSubmit = () => {
    const petPhotoRef = ref(firebaseStorage, 'cat');
    uploadBytes(petPhotoRef, petPhoto)
      .then(() => {
        getDownloadURL(petPhotoRef)
          .then((url) => {
            setUrl(url);
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
      <input type="file" onChange={handlePhotoChange} />
      <button onClick={handleSubmit}>Submit</button>
      <img src={url} />
    </>
  );
}

export default Home;

// https://drive.google.com/uc?id=1_JA7hdd39rQS9wYII_s7WJIoUoNtRAwY
// https://drive.google.com/uc?id=1G-ISkg5WzwEcqUdsZIo47ubbHO4S4VM1
