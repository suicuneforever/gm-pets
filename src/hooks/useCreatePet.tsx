import axios from 'axios';
import { Pet } from '@prisma/client';
import { useMutation, useQueryClient } from 'react-query';

function useCreatePet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (pet: Partial<Pet>) => axios.post('http://localhost:3000/pet', pet).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(['pets']);
    },
  });
}

export default useCreatePet;
