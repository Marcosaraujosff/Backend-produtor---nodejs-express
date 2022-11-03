/*
  Warnings:

  - Added the required column `month` to the `coffee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `day` on the `coffee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "coffee" ADD COLUMN     "month" INTEGER NOT NULL,
DROP COLUMN "day",
ADD COLUMN     "day" INTEGER NOT NULL;
