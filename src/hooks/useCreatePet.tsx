import React from 'react';
import axios from 'axios';

function useCreatePet() {
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isIdle: true,
  });

  const mutate = React.useCallback(async (values) => {
    setState({ isLoading: true });
    try {
      const data = axios.post('/api/posts', values).then((res) => res.data);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  }, []);

  return [mutate, state];
}

export default useCreatePet;
