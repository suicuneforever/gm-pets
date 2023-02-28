import { Pet } from '@prisma/client';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

// query key - array?
// loading vs fetching
// invalidating queries
// setting query state
// optimistic updates

function Home() {
  const queryClient = useQueryClient();

  const petsQuery = useQuery<Pet[]>({
    queryKey: 'pets',
    queryFn: () => axios.get('http://localhost:3000/pets').then((res) => res.data),
  });

  const randomPetQuery = useQuery<Pet>('randomPet', () =>
    axios.get('http://localhost:3000/pets/random').then((res) => res.data),
  );

  console.log(petsQuery.data);

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
    </>
  );
}

export default Home;
