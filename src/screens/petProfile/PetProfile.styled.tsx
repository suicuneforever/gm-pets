import styled from 'styled-components';

export const PetProfileContainer = styled.div`
  background: #f9f7ee;
  padding: 30px 100px;
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-weight: bold;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

export const PetBio = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;

export const PetName = styled.h1`
  font-size: 50px;
`;

export const PetLabel = styled.div`
  font-weight: bold;
  font-family: 'Courier New';
  font-size: 20px;
`;

export const PetInfo = styled.div`
  font-family: 'Courier New';
  padding-bottom: 10px;
  font-weight: 200;
`;

export const PetProfileImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
