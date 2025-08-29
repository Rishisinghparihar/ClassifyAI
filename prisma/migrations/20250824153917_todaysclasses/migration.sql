/*
  Warnings:

  - The values [LIVE] on the enum `SessionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SessionStatus_new" AS ENUM ('UPCOMING', 'COMPLETED');
ALTER TABLE "ClassSession" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "ClassSession" ALTER COLUMN "status" TYPE "SessionStatus_new" USING ("status"::text::"SessionStatus_new");
ALTER TYPE "SessionStatus" RENAME TO "SessionStatus_old";
ALTER TYPE "SessionStatus_new" RENAME TO "SessionStatus";
DROP TYPE "SessionStatus_old";
ALTER TABLE "ClassSession" ALTER COLUMN "status" SET DEFAULT 'UPCOMING';
COMMIT;
