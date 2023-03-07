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
  const queryClient = useQueryClient();

  const [showPetForm, setShowPetForm] = useState<boolean>(false);

  const petsQuery = useQuery<Pet[]>({
    queryKey: ['pets'],
    queryFn: () => axios.get('http://localhost:3000/pets').then((res) => res.data),
  });

  const randomPetQuery = useQuery<Pet>(['randomPet'], () =>
    axios.get('http://localhost:3000/pets/random').then((res) => res.data),
  );

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
      <button onClick={toggleAddPetForm}>Add Pet</button>
      <AddPetForm isOpen={showPetForm} toggle={toggleAddPetForm} />
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
      {/* <input type="file" onChange={handlePhotoChange} />
      <button onClick={handleSubmit}>Submit</button> */}
    </>
  );
}

export default Home;
