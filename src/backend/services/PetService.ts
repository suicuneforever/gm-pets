import { Pet, PrismaClient } from '@prisma/client';

class PetService {
  public prisma = new PrismaClient();

  public async getPets(): Promise<Pet[]> {
    const pets: Pet[] = await this.prisma.pet.findMany();
    return pets;
  }

  public async getRandomPet(): Promise<Pet> {
    const petCount = await this.prisma.pet.count();
    const randomId = Math.floor(Math.random() * petCount) + 1;

    const randomPet: Pet = await this.prisma.pet.findUniqueOrThrow({ where: { id: randomId } });
    return randomPet;
  }
}

export default PetService;
