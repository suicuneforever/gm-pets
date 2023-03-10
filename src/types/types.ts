import { Pet } from '@prisma/client';
import { AxiosError } from 'axios';

export interface UsePetState {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  data?: Pet;
  error?: AxiosError;
}

export type UsePetAction = Partial<UsePetState>;
