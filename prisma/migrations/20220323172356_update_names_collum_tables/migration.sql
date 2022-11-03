/*
  Warnings:

  - You are about to drop the column `cep` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `users` table. All the data in the column will be lost.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "cep",
DROP COLUMN "cidade",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "zipcode" TEXT NOT NULL;
