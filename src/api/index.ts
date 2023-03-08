import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/owners', async (req, res) => {
  const owners = await prisma.owner.findMany({ include: { pets: true } });
  res.json(owners);
});

app.get('/pets', async (req, res) => {
  const pets = await prisma.pet.findMany();
  res.json(pets);
});

app.get('/pet/:id', async (req, res) => {
  const { id } = req.params;
  const pet = await prisma.pet.findUnique({
    where: { id: Number(id) },
  });
  res.json(pet);
});

app.get('/pets/random', async (req, res) => {
  const petCount = await prisma.pet.count();
  const randomId = Math.floor(Math.random() * petCount) + 1;

  const randomPet = await prisma.pet.findUniqueOrThrow({ where: { id: randomId } });
  res.json(randomPet);
});

app.post(`/pet`, async (req, res) => {
  const { age } = req.body;
  const result = await prisma.pet.create({
    data: {
      ...req.body,
      age: Number(age),
    },
  });
  res.json(result);
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);
