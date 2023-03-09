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
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/motley.jpg?alt=media&token=d4b5be67-52de-4587-9253-efd25441051f',
        },
        {
          name: 'Malachi',
          animal: 'Dog',
          breed: 'Chinese Sharpei/Border Collie Mix',
          age: 12,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/malachi.jpg?alt=media&token=98a3fef1-0c6b-4cd8-9d01-2428ccd16b4e',
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
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/xyla.png?alt=media&token=f05d87b8-b4b1-48f2-b4aa-4310703801b5',
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
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/monty.jpg?alt=media&token=547d5115-7409-4766-81d1-d916302a9703',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);

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
