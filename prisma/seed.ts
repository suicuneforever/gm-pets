import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const ownerData: Prisma.OwnerCreateInput[] = [
  {
    name: 'Dani',
    pets: {
      create: [
        {
          name: 'Motley',
          animal: 'Dog',
          breed: 'Austrailian Cattle Dog Mix',
          age: 11,
        },
        {
          name: 'Malachi',
          animal: 'Dog',
          breed: 'Chinese Sharpei/Border Collie Mix',
          age: 12,
        },
      ],
    },
  },
  {
    name: 'Dillon',
    pets: {
      create: [
        {
          name: 'Xyla',
          animal: 'Cat',
          breed: 'Calico',
          age: 10,
        },
      ],
    },
  },
  {
    name: 'Kris',
    pets: {
      create: [
        {
          name: 'Monty',
          animal: 'Dog',
          breed: 'Jindo',
          age: 4,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   });
  //   console.log(`Created user with id: ${user.id}`);
  // }

  for (const o of ownerData) {
    const owner = await prisma.owner.create({
      data: o,
    });
    console.log(`Created owner with id: ${owner.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
