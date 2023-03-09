import axios from 'axios';
import React, { useMemo } from 'react';

function usePets() {
  // step 1: refactor usePets hook
  //const petsQuery = useQuery<Pet[]>(['pets'], () => axios.get('http://localhost:3000/pets').then((res) => res.data));
  const [state, setState] = React.useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true });
    try {
      const data = await axios.get('http://localhost:3000/pets').then((res) => res.data);
      console.log('data', data);
      console.log('state', state);
      setState({ isSuccess: true, data });
    } catch (error) {
      setState({ isError: true, error });
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return useMemo(
    () => ({
      ...state,
      fetch,
    }),
    [state.data, state.isLoading, state.isError, fetch],
  );
}

export default usePets;
