/*
  Warnings:

  - You are about to drop the column `params` on the `coffee` table. All the data in the column will be lost.
  - Added the required column `dateParams` to the `coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coffee" DROP COLUMN "params",
ADD COLUMN     "dateParams" TEXT NOT NULL;
