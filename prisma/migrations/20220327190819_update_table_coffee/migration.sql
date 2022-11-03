/*
  Warnings:

  - You are about to drop the `coffe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "coffe";

-- CreateTable
CREATE TABLE "coffee" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "type_Dura" TEXT NOT NULL,
    "type_Rio" TEXT NOT NULL,
    "type_7_8" TEXT NOT NULL,

    CONSTRAINT "coffee_pkey" PRIMARY KEY ("id")
);
