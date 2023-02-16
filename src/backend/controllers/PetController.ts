import { Pet } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import PetService from '../services/PetService';

class PetController {
  public petService = new PetService();

  public async getPets(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const pets: Pet[] = await this.petService.getPets();

      res.status(200).json({ data: pets, message: 'getPets' });
    } catch (error) {
      next(error);
    }
  }

  public async getRandomPet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const pet: Pet = await this.petService.getRandomPet();

      res.status(200).json({ data: pet, message: 'getPets' });
    } catch (error) {
      next(error);
    }
  }
}

export default PetController;
