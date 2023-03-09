import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddPetForm from '../addPetForm/AddPetForm';
import {
  AddPetButton,
  Buttons,
  Divider,
  HeaderContainer,
  Heading,
  HeadingContainer,
  HomeLink,
  RandomPetButton,
} from './Header.styled';

function Header() {
  const [showPetForm, setShowPetForm] = useState<boolean>(false);

  const toggleAddPetForm = () => {
    setShowPetForm(!showPetForm);
  };

  return (
    <HeaderContainer>
      <AddPetForm isOpen={showPetForm} toggle={toggleAddPetForm} />
      <HeadingContainer>
        <HomeLink to={'/'}>
          <Heading>giant machines pets</Heading>
        </HomeLink>
        <Buttons>
          <AddPetButton onClick={toggleAddPetForm}>add pet</AddPetButton>
          <RandomPetButton>random pet</RandomPetButton>
        </Buttons>
      </HeadingContainer>
      <Divider />
    </HeaderContainer>
  );
}

export default Header;
