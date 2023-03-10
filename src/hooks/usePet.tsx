import { Pet } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import React from 'react';
export interface UsePetState {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  data?: Pet;
  error?: unknown;
}

export type UsePetAction = Partial<UsePetState>;

function usePet(petId: string) {
  const [state, setState] = React.useReducer<React.Reducer<UsePetState, UsePetAction>>((_, action) => action, {
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
