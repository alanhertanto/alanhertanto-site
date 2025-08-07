-- CreateTable
CREATE TABLE "public"."GuestEntry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestEntry_pkey" PRIMARY KEY ("id")
);
