/*
  Warnings:

  - Added the required column `dateParams` to the `coffee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coffee" ADD COLUMN     "dateParams" TEXT NOT NULL;
