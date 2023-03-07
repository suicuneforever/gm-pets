import styled from 'styled-components';

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  height: 40vh;
  flex-grow: 1;
  list-style-type: none;

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
