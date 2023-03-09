import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: #f9f7ee;
  padding: 20px 100px 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-weight: bold;
`;

export const HomeLink = styled(Link)`
  text-decoration: none !important;
`;

export const Heading = styled.h1`
  font-size: 54px;
  color: #0e0e0e;

  :hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #0e0e0e;
    -webkit-text-stroke-width: 0.16rem;
  }
`;

export const Buttons = styled.div`
  align-self: center;
`;

export const AddPetButton = styled.a`
  padding: 15px 25px;
  height: 20px;
  background: #0e0e0e;
  color: #f9f7ee;
  transition: all 0.3s linear;
  border: 5px solid #0e0e0e;

  :hover {
    cursor: pointer;
    background: #f9f7ee;
    color: #0e0e0e;
  }
`;

export const RandomPetButton = styled.a`
  margin-left: 10px;
  padding: 15px 25px;
  height: 20px;
  background: #f9f7ee;
  color: #0e0e0e;
  transition: all 0.3s linear;
  border: 5px solid #0e0e0e;

  :hover {
    cursor: pointer;
    background: #0e0e0e;
    color: #f9f7ee;
  }
`;

export const Divider = styled.hr`
  border-width: 3px;
  border-style: solid;
  border-color: #0e0e0e;
  background: #f9f7ee;
  margin: 0;
`;
