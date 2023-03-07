import React from 'react';
import { ModalContainer, ModalOverlay } from './AddPetForm.styled';

type AddPetFormProps = {
  isOpen: boolean;
  toggle: () => void;
};

function AddPetForm({ isOpen, toggle }: AddPetFormProps) {
  if (isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={toggle}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <div>pet form</div>
        <button onClick={toggle}>Close</button>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default AddPetForm;
