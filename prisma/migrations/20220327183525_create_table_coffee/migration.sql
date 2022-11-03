-- CreateTable
CREATE TABLE "coffe" (
    "id" TEXT NOT NULL,
    "day" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "type_Dura_Value" TEXT NOT NULL,
    "type_Rio_Value" TEXT NOT NULL,
    "type_7_8_value" TEXT NOT NULL,

    CONSTRAINT "coffe_pkey" PRIMARY KEY ("id")
);
