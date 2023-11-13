/*
  Warnings:

  - You are about to drop the column `automationDataId` on the `MixSettings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `TrackSettings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TrackSettings" DROP CONSTRAINT "TrackSettings_userId_fkey";

-- AlterTable
ALTER TABLE "MixSettings" DROP COLUMN "automationDataId";

-- AlterTable
ALTER TABLE "TrackSettings" DROP COLUMN "userId";
