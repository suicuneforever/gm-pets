import { Pet } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import React from 'react';
export interface UsePetsState {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  data?: Pet[];
  error?: AxiosError;
}

export type UsePetsAction = Partial<UsePetsState>;

function usePets() {
  const [state, setState] = React.useReducer<React.Reducer<UsePetsState, UsePetsAction>>((_, action) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const data = await axios.get('http://localhost:3000/pets').then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      const axiosError = error as AxiosError;
      setState({ isError: true, error: axiosError });
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

export default usePets;
