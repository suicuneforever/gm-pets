import { Pet } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

function usePets() {
  return useQuery<Pet[], AxiosError>({
    queryKey: ['pets'],
    queryFn: () => axios.get('http://localhost:3000/pets').then((res) => res.data),
  });
}

export default usePets;
