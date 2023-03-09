import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(40, 40, 40, 0.642);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #0e0e0e;
    font-family: 'Source Sans Pro', 'Arial', sans-serif;
    font-weight: bold;
  }
`;

export const PetForm = styled.form`
  color: #0e0e0e;
  font-family: 'Courier New';
  font-weight: 700;
  font-size: 16px;

  label {
    display: block;
  }

  input {
    background: transparent;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #0e0e0e;
    box-shadow: 0 0 0 0 #0e0e0e;
    box-sizing: border-box;
    color: #0e0e0e;
    font-family: 'Courier New';
    font-weight: 400;
    font-size: 16px;
    width: 100%;
  }

  select {
    background: transparent;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #0e0e0e;
    box-shadow: 0 0 0 0 #0e0e0e;
    box-sizing: border-box;
    color: #0e0e0e;
    font-family: 'Courier New';
    font-weight: 400;
    font-size: 16px;
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const ModalContainer = styled.div`
  display: block;
  margin: 0 10px 10px 0;
  border: 1px solid #0e0e0e;
  background: #f9f7ee;
  width: 40%;
  height: 40%;
  transition: all 0.3s linear;
  position: absolute;
  z-index: 10;
  padding: 30px;
`;

export const ContainerShadow = styled.div`
  margin: 10px 0 0 10px;
  width: calc(100% - 10px);
  background: #0e0e0e;
  width: 40%;
  height: 40%;
  transition: all 0.3s linear;
  position: absolute;
  padding: 30px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  border: 2px solid #0e0e0e;
  width: 100%;
  height: 100%;
  margin: 10px 20px 60px 10px;
  /* background: rgba(74, 74, 74, 0.642); */
  background-size: 3px 3px;
  background-position: -19px -19px;
`;

export const PetPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  align-self: center;
`;
