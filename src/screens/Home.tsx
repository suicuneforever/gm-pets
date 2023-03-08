import { Owner, Pet } from '@prisma/client';
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { ListItem, PetImage, UnorderedList } from './Home.styled';
import AddPetForm from '../components/addPetForm/AddPetForm';
import usePets from '../hooks/usePets';
import { Link } from 'react-router-dom';

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
// fix dev watch issue
// fix backend
// separate FE and BE
// fix axios path

function Home() {
  const queryClient = useQueryClient();

  const petsQuery = usePets();
  const [showPetForm, setShowPetForm] = useState<boolean>(false);

  // useQuery takes two params: a query key*, also known as an identifier, and a fetch function.
  // the asynchronous function that is getting your data or throwing an error if it can't. note: we
  // don't need to use await or async because axios will return a promise?
  // react query also handles the state some might use when using redux, reducers, etc.
  // useQuery will return a query object with things like isLoading, isSuccess, isError, status, etc.
  // you can use a string, but using an array gives us structure for future queries that depeond on ids, etc.

  const randomPetQuery = useQuery<Pet>(['randomPet'], () =>
    axios.get('http://localhost:3000/pets/random').then((res) => res.data),
  );

  const handleRandomPet = () => {
    randomPetQuery.refetch();
  };

  const toggleAddPetForm = () => {
    setShowPetForm(!showPetForm);
  };

  //   if (isError) {
  //     return <span>Error: {error.message}</span>;
  //   }

  return (
    <>
      <button onClick={toggleAddPetForm}>Add Pet</button>
      {/* <AddPetForm isOpen={showPetForm} toggle={toggleAddPetForm} /> */}
      {petsQuery.isLoading ? (
        <span>Loading...</span>
      ) : (
        <UnorderedList>
          {petsQuery.data?.map((pet: Pet) => (
            <ListItem key={pet.id}>
              <Link to={`/pet/${pet.id}`}>
                <PetImage src={pet.photoUrl} />
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
      <button onClick={handleRandomPet}>Random Pet</button>
      <span>Random pet: {randomPetQuery?.data?.name}</span>
    </>
  );
}

export default Home;
