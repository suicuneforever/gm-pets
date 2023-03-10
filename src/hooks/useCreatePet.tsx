import React from 'react';
import axios from 'axios';
import { Pet } from '@prisma/client';

function useCreatePet() {
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const mutate = React.useCallback(async (values: Pet) => {
    setState({ isLoading: true });
    try {
      const data = axios.post('http://localhost:3000/pet', values).then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}

export default useCreatePet;
