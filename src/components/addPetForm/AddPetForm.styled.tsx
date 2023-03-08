import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(23, 28, 63, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #484ab3;
    font-family: 'Courier New';
  }
`;

export const PetForm = styled.form`
  color: #484ab3;
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
    border-color: #484ac5;
    box-shadow: 0 0 0 0 #484ac5;
    box-sizing: border-box;
    color: #484ab3;
    font-family: 'Courier New';
    font-weight: 400;
    font-size: 16px;
    width: 100%;
  }

  select {
    background: transparent;
    outline: 0;
    border-width: 0 0 2px;
    border-color: #484ac5;
    box-shadow: 0 0 0 0 #484ac5;
    box-sizing: border-box;
    color: #484ab3;
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
  border: 1px solid #484ab3;
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
  background: #484ab3;
  width: 40%;
  height: 40%;
  transition: all 0.3s linear;
  position: absolute;
  padding: 30px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  border: 2px solid #484ab3;
  width: 100%;
  height: 100%;
  margin: 10px 20px 60px 10px;
  background: rgba(51, 59, 123, 0.642);
  background-image: radial-gradient(#484ab3 1px, transparent 0);
  background-size: 3px 3px;
  background-position: -19px -19px;
`;

export const PetPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  align-self: center;
`;
