import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const plans = [
    { name: "PRO_MONTHLY", price: 500 },
    { name: "PRO_YEARLY", price: 5000 },
    { name: "ULTIMATE_MONTHLY", price: 1000 },
    { name: "ULTIMATE_YEARLY", price: 10000 },
  ];

  for (const plan of plans) {
    await prisma.planConfig.upsert({
      where: { name: plan.name },
      update: { price: plan.price },
      create: {
        name: plan.name,
        price: plan.price,
      },
    });
  }

  console.log("✅ Seeded PlanConfig table with initial plan prices.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
