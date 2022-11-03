/*
  Warnings:

  - You are about to drop the column `dateParams` on the `coffee` table. All the data in the column will be lost.
  - Added the required column `params` to the `coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coffee" DROP COLUMN "dateParams",
ADD COLUMN     "params" TEXT NOT NULL;
