-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('InformationGathering', 'Applied', 'FirstInterview', 'SecondInterview', 'ThirdInterview', 'Offer', 'Rejected', 'Retired', 'Accepted', 'NotAccepted', 'Waiting', 'Other');

-- CreateEnum
CREATE TYPE "AspirationLevel" AS ENUM ('High', 'Middle', 'Low');

-- CreateTable
CREATE TABLE "profile" (
    "id" UUID NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "name" VARCHAR(40) NOT NULL DEFAULT '未設定',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "companyName" VARCHAR(255) NOT NULL,
    "status" "Status",
    "aspirationLevel" "AspirationLevel",
    "applicationRoute" VARCHAR(255) NOT NULL DEFAULT '',
    "workLocation" VARCHAR(255) NOT NULL DEFAULT '',
    "estimatedIncome" INTEGER,
    "companyDetail" TEXT NOT NULL DEFAULT '',
    "contactEmail" VARCHAR(255) NOT NULL DEFAULT '',
    "contactPhoneNumber" VARCHAR(255) NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
