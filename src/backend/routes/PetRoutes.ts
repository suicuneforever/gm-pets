import { Router } from 'express';
import PetController from '../controllers/PetController';
import { Routes } from '../interfaces/routes';

class PetRoutes implements Routes {
  public path = 'pets';
  public router = Router();
  public petController = new PetController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.petController.getPets);
    this.router.get(`${this.path}/random`, this.petController.getRandomPet);
  }
}

export default PetRoutes;
