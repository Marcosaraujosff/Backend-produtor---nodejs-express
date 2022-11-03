/*
  Warnings:

  - You are about to drop the column `type_7_8_value` on the `coffe` table. All the data in the column will be lost.
  - You are about to drop the column `type_Dura_Value` on the `coffe` table. All the data in the column will be lost.
  - You are about to drop the column `type_Rio_Value` on the `coffe` table. All the data in the column will be lost.
  - Added the required column `type_7_8` to the `coffe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_Dura` to the `coffe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_Rio` to the `coffe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coffe" DROP COLUMN "type_7_8_value",
DROP COLUMN "type_Dura_Value",
DROP COLUMN "type_Rio_Value",
ADD COLUMN     "type_7_8" TEXT NOT NULL,
ADD COLUMN     "type_Dura" TEXT NOT NULL,
ADD COLUMN     "type_Rio" TEXT NOT NULL;
