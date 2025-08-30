/*
  Warnings:

  - You are about to drop the column `subject` on the `ClassSession` table. All the data in the column will be lost.
  - Added the required column `semester` to the `ClassSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `ClassSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekday` to the `ClassSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectId` to the `TeacherSubject` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Weekday" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- DropForeignKey
ALTER TABLE "public"."ClassSession" DROP CONSTRAINT "ClassSession_teacherId_fkey";

-- DropIndex
DROP INDEX "public"."ClassSession_teacherId_startTime_idx";

-- AlterTable
ALTER TABLE "public"."ClassSession" DROP COLUMN "subject",
ADD COLUMN     "semester" INTEGER NOT NULL,
ADD COLUMN     "subjectId" TEXT NOT NULL,
ADD COLUMN     "weekday" "public"."Weekday" NOT NULL;

-- AlterTable
ALTER TABLE "public"."TeacherSubject" ADD COLUMN     "subjectId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClassSession_teacherId_weekday_semester_idx" ON "public"."ClassSession"("teacherId", "weekday", "semester");

-- AddForeignKey
ALTER TABLE "public"."TeacherSubject" ADD CONSTRAINT "TeacherSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassSession" ADD CONSTRAINT "ClassSession_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClassSession" ADD CONSTRAINT "ClassSession_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
