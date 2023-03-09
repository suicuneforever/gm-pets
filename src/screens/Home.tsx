import { Pet } from '@prisma/client';
import React from 'react';
import { HomeContainer, ListItem, PetImage, UnorderedList } from './Home.styled';
import usePets from '../hooks/usePets';
import { Link } from 'react-router-dom';

function Home() {
  const petsQuery = usePets();

  if (petsQuery.isError) {
    return <span>Error: {petsQuery.error.message}</span>;
  }

  return (
    <HomeContainer>
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
    </HomeContainer>
  );
}

export default Home;
