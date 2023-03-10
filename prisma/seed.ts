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
          name: 'Monte',
          animal: 'Dog',
          breed: 'Jindo',
          age: 4,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/monty.jpg?alt=media&token=547d5115-7409-4766-81d1-d916302a9703',
        },
      ],
    },
  },
  {
    name: 'Wendy',
    pets: {
      create: [
        {
          name: 'Pear',
          animal: 'Dog',
          breed: 'Yorkie Poodle (we think?)',
          age: 10,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/pear%20Large.jpeg?alt=media&token=b5caccfb-a398-463c-acbb-2e528088b9f1',
          description:
            'Napoleon complex through and through. Fiercely independent yet clingy. Big fan of naps and organ meat.',
        },
      ],
    },
  },
  {
    name: 'Nusrut',
    pets: {
      create: [
        {
          name: 'Kiwi',
          animal: 'Cat',
          breed: 'Yorkie Poodle (we think?)',
          age: 1,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/kiwi%20Large.jpeg?alt=media&token=3cc1fbec-75cb-42c8-8d1f-8b8b762439d6',
          description:
            "He's perfect and sweet in every way. He's super clingy and food motivated, but super loving. His hobbies include running as fast as he can when he sees me go to the kitchen. His arch nemesis is the vaccuum.",
        },
      ],
    },
  },
  {
    name: 'Alfonso',
    pets: {
      create: [
        {
          name: 'Ilargi',
          animal: 'Cat',
          breed: 'Unknown',
          age: 7,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/ilargi.jpg?alt=media&token=dffd3248-1803-4130-b841-f86c6085f6aa',
          description:
            "Ilargi is a lovely cat from Bogor, Indonesia who loves to spend her days lounging around and taking naps. With her soft fur and gentle purr, she is the perfect companion for anyone looking for a cuddly and affectionate feline friend.  When Ilargi is not sleeping, she can often be found indulging in her favorite snack - tuna. She loves the taste and aroma of fresh tuna and will eagerly come running when she hears the can being opened. In her free time, Ilargi enjoys playing with lint. She loves nothing more than chasing after the little fuzz balls and batting them around with her paws. It's a simple pleasure, but one that brings her a lot of joy and satisfaction. But don't be fooled by her laid-back demeanor - Ilargi also has a playful and energetic side. When the mood strikes her, she loves to zoom around the house, darting in and out of rooms and playing hide-and-seek with her humans. It's a fun and exhilarating game that keeps her entertained for hours on end. Overall, Ilargi is a wonderful cat with a big personality and a lot of love to give. Whether you're looking for a nap buddy, a playmate, or a cuddle companion, she is sure to bring a smile to your face and warmth to your heart.",
        },
      ],
    },
  },
  {
    name: 'Nicole',
    pets: {
      create: [
        {
          name: 'Smokey',
          animal: 'Dog',
          breed: 'Australian Shepard',
          age: 2,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/smokey.png?alt=media&token=a63b5ce5-c2f6-4222-98f7-f8c7e82003bf',
          description: 'Medium sized dog with fluffy grey and black fur, light brown eyes',
        },
      ],
    },
  },
  {
    name: 'Sol',
    pets: {
      create: [
        {
          name: 'Smokey',
          animal: 'Cat',
          breed: 'Snowshoe Siamese',
          age: 3,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/taco.jpg?alt=media&token=7c888c67-616c-4614-8ebb-f4a41447a04c',
          description: 'Taco has light blue eyes, white long hair fur and black paws and tails.',
        },
      ],
    },
  },
  {
    name: 'Gabe',
    pets: {
      create: [
        {
          name: 'Mercury',
          animal: 'Cat',
          breed: 'Tuxedo',
          age: 4,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/mercury%20Large.jpeg?alt=media&token=a760ed15-74ce-4a29-8c0d-35c58e1c675e',
          description: 'Mercury is a big, lazy boy who is very affectionate. He loves food most of all!',
        },
        {
          name: 'Jupiter',
          animal: 'Cat',
          breed: 'Tortoiseshell',
          age: 2,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/jupiter.jpg?alt=media&token=9d1d202c-17fb-493e-890c-c8d0cb832813',
          description:
            "Jupiter is VERY curious! If you move or even exist around her, she will want to know what it is you're doing!",
        },
      ],
    },
  },
  {
    name: 'Frank',
    pets: {
      create: [
        {
          name: 'Bosco',
          animal: 'Dog',
          breed: 'Tri-color Rough Collie',
          age: 3,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/bosco.jpeg?alt=media&token=b5433ad1-3878-4797-a7ea-ab5dd954bdc4',
          description: 'more hair than dog',
        },
      ],
    },
  },
  {
    name: 'Oliver',
    pets: {
      create: [
        {
          name: 'Kia',
          animal: 'Cat',
          breed: 'Domestic Medium Hair',
          age: 4,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/kiko%20Large.jpeg?alt=media&token=e9a3cbdb-a90d-4daa-bdcc-287503d0700f',
          description: 'Kia is a clingy cuddle bug that yells at you until you let her on your lap or carry her.',
        },
        {
          name: 'Kiko',
          animal: 'Cat',
          breed: 'Domestic Medium Hair',
          age: 4,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/kia%20Large.jpeg?alt=media&token=a0ef05bd-f953-4e3d-9a41-5205f8cdd559',
          description: 'Kiko is a needy (on his terms only) airhead that likes to be carried like a baby being burped',
        },
      ],
    },
  },
  {
    name: 'Johnny',
    pets: {
      create: [
        {
          name: 'Nala',
          animal: 'Dog',
          breed: 'lab/pointer mix',
          age: 8,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/nala.jpg?alt=media&token=d86ea761-02e6-4ff4-b701-e1980805f28a',
          description: 'big and energetic',
        },
      ],
    },
  },
  {
    name: 'Danny',
    pets: {
      create: [
        {
          name: 'Oliver',
          animal: 'Dog',
          breed: 'South American village dog',
          age: 7,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/oliver.jpg?alt=media&token=4a38d9f4-b30b-4565-b73c-f9a5a360edcd',
        },
      ],
    },
  },
  {
    name: 'Meghan',
    pets: {
      create: [
        {
          name: 'Nucky',
          animal: 'Dog',
          breed: 'Chiweenie',
          age: 3,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/nucky.jpg?alt=media&token=2cc5f3ab-94c8-4c54-afc4-fa986591f8f0',
          description:
            'Nucky (full name Enoch) is 3 years old. According to Embark, majority chihuahua, dachshund, pomeranian, and mini pinscher. Small breed, large ears, extremely handsome.',
        },
      ],
    },
  },
  {
    name: 'Charlie',
    pets: {
      create: [
        {
          name: 'Leo',
          animal: 'Dog',
          breed: 'Italian Greyhound',
          age: 2,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/leo.png?alt=media&token=08fa5056-e6b5-4384-8976-f885a09d4616',
          description:
            'Leo is an Italian Greyhound who was born in July of 2021. He’s 15 lbs of athletic twisted steel, and is a very inquisitive, persistent, and willful boy. He loves to lay in the sun, play fetch, and wrestle with his friends (mostly larger dogs and humans). He’s a very strong communicator, and will make it abundantly clear if he expects you to scratch him.',
        },
      ],
    },
  },
  {
    name: 'Claire',
    pets: {
      create: [
        {
          name: 'Petal',
          animal: 'Dog',
          breed: 'Lab/American Bully/Catahoula Leopard Dog/Doberman/Pitt Bull',
          age: 1,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/gm-pets.appspot.com/o/petal.jpeg?alt=media&token=cd703158-269b-4092-8f60-0891cb6ec2b2',
          description: 'Wiggly, excitable, loving, cuddly, spoiled, playful, particular, lazy, sweet. ',
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
