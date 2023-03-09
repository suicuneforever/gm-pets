import React from 'react';
import { useParams } from 'react-router-dom';
import usePet from '../../hooks/usePet';
import {
  Column,
  PetBio,
  PetInfo,
  PetLabel,
  PetName,
  PetProfileContainer,
  PetProfileImage,
  Row,
} from './PetProfile.styled';

function PetProfile() {
  const { petId } = useParams();
  const petQuery = usePet(petId ?? '');

  return (
    <PetProfileContainer>
      {petQuery.isLoading ? (
        <span>Loading...</span>
      ) : petQuery.isError ? (
        petQuery.error.message
      ) : (
        <PetBio>
          <Row>
            <PetProfileImage src={petQuery.data.photoUrl} />
            <Column>
              <PetName>{petQuery.data.name}</PetName>
              <PetLabel>Breed:</PetLabel>
              <PetInfo>{petQuery.data.breed}</PetInfo>
              <PetLabel>Age:</PetLabel>
              <PetInfo>{petQuery.data.age}</PetInfo>
              <PetLabel>About:</PetLabel>
              <PetInfo>Description</PetInfo>
            </Column>
          </Row>
        </PetBio>
      )}
    </PetProfileContainer>
  );
}

export default PetProfile;
