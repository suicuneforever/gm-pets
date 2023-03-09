import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #f9f7ee;
  padding: 20px 100px;
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-weight: bold;
`;

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const HomeHeading = styled.h1`
  font-size: 54px;
  color: #0e0e0e;
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
  border-width: 5px;
  border-style: solid;
  border-color: #0e0e0e;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const ListItem = styled.li`
  height: 30vh;
  flex-grow: 1;
  list-style-type: none;
  margin: 20px;
  /* position: relative; */

  /* transition: all 0.3s; */

  :nth-child(4n + 1) {
    box-shadow: 10px 10px #e93da2;

    :hover {
      box-shadow: 10px 10px #f9f7ee, 10px 10px 0px 1px #e93da2;
    }
  }

  :nth-child(4n + 2) {
    box-shadow: 10px 10px #0682c6;

    :hover {
      box-shadow: 10px 10px #f9f7ee, 10px 10px 0px 1px #0682c6;
    }
  }

  :nth-child(4n + 3) {
    box-shadow: 10px 10px #f8c909;

    :hover {
      box-shadow: 10px 10px #f9f7ee, 10px 10px 0px 1px #f8c909;
    }
  }

  :nth-child(4n + 4) {
    box-shadow: 10px 10px #0bb161;

    :hover {
      box-shadow: 10px 10px #f9f7ee, 10px 10px 0px 1px #0bb161;
    }
  }

  :last-child {
    flex-grow: 10;
  }
`;

export const PetImage = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  /* position: absolute; */
`;

export const ListItemShadow = styled.div`
  margin: 10px 0 0 10px;
  /* width: calc(100% - 10px); */
  background: #484ab3;
  /* transition: all 0.3s linear; */
  /* position: absolute; */
  /* padding: 30px; */
  z-index: -1;

  height: 100%;
  width: 100%;
  /* position: absolute; */

  /* :nth-child(4n + 1) {
    padding: 200px;
  } */
`;
