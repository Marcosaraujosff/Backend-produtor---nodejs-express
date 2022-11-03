/*
  Warnings:

  - You are about to drop the column `day` on the `coffee` table. All the data in the column will be lost.
  - You are about to drop the column `month` on the `coffee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "coffee" DROP COLUMN "day",
DROP COLUMN "month";
