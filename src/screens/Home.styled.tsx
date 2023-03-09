import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: #f9f7ee;
  padding: 10px 100px;
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
`;
