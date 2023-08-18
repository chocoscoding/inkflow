import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt"> & {
  createdAt: string;
};
export type SafeUser2 = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
