/*
  Warnings:

  - The `date` column on the `coffee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "coffee" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
