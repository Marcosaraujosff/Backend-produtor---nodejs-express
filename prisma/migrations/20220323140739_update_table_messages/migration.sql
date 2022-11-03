/*
  Warnings:

  - Added the required column `messages` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "messages" TEXT NOT NULL;
