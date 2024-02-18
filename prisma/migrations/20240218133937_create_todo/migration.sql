-- CreateEnum
CREATE TYPE "taskStatus" AS ENUM ('NotStarted', 'InProgress', 'Completed');

-- CreateTable
CREATE TABLE "todo" (
    "id" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "taskName" VARCHAR(255) NOT NULL DEFAULT '',
    "dueDate" TIMESTAMP(3),
    "status" "taskStatus" NOT NULL DEFAULT 'NotStarted',
    "note" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
