import { Pet } from '@prisma/client';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function usePet(petId: string) {
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const data = await axios.get(`http://localhost:3000/pet/${petId}`).then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return {
    ...state,
    fetch,
  };
}

export default usePet;
