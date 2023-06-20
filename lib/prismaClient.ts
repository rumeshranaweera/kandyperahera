import { FormValue } from "@/app/test/page";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export async function addNewExplore(data: FormValue) {
//   return prisma.exploreItem.create({ data });
// }
// export async function addMultipleExplore(data: FormValue[]) {
//   return prisma.exploreItem.createMany({ data });
// }
// export async function getExploreData() {
//   return prisma.exploreItem.findMany();
// }
//
// export async function deleteAllExploreData() {
//   return prisma.exploreItem.deleteMany();
// }

// client()
//   .then(async (data) => {
//     console.log(data);
//   })
//   .catch(async (e) => {
//     console.error(e);
//
//     process.exit(1);
//   })
//   .finally(async () => await prisma.$disconnect());
