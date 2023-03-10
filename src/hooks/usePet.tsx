import { Pet } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

function usePet(petId: string) {
  return useQuery<Pet, AxiosError>({
    queryKey: ['pets', petId],
    queryFn: () => axios.get(`http://localhost:3000/pet/${petId}`).then((res) => res.data),
  });
}

export default usePet;
