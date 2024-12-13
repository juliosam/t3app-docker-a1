'use server'

import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () => {
  return new PrismaClient();
}

// return new PrismaClient({
//   log:
//     env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
// });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export async function createPost() {
  const post = await db.post.create({
      data: {
          name: 'hello mundo',
          createdAt: Date.now().toLocaleString(),
          updatedAt: Date.now().toLocaleString()
      },
  })
  return post
}
