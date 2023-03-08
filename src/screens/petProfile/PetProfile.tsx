import React from 'react';
import { Link, useParams } from 'react-router-dom';
import usePet from '../../hooks/usePet';

function PetProfile() {
  const { petId } = useParams();
  const petQuery = usePet(petId ?? '');

  return (
    <div>
      pet profile
      <Link to={'/'}>Home</Link>
      {petQuery.isLoading ? (
        <span>Loading...</span>
      ) : petQuery.isError ? (
        petQuery.error.message
      ) : (
        <div>
          <h2>{petQuery.data.name}</h2>
          <p>{petQuery.data.breed}</p>
          <img src={petQuery.data.photoUrl} />
        </div>
      )}
    </div>
  );
}

export default PetProfile;
