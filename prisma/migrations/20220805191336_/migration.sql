/*
  Warnings:

  - Added the required column `day` to the `coffee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coffee" ADD COLUMN     "day" TEXT NOT NULL,
ADD COLUMN     "month" TEXT NOT NULL;
