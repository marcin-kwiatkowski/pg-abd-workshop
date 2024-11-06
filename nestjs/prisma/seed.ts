import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const notice = await prisma.documentType.create({
    data: {
      id: '8bc8b70c-3105-434f-8586-1213d6ed4044',
      name: 'Pismo',
    },
  });
  const contract = await prisma.documentType.create({
    data: {
      id: '3fa4e237-f462-486e-afb4-0bfb245ab0d0',
      name: 'Umowa',
    },
  });
  const invoice = await prisma.documentType.create({
    data: {
      id: '4d9e0a18-d43d-4d50-8fe7-0cbcd895deaa',
      name: 'Faktura',
    },
  });
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
