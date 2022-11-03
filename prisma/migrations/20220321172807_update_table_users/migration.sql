/*
  Warnings:

  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL;
