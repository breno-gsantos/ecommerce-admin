/*
  Warnings:

  - You are about to drop the column `isArchive` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isArchive",
ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false;
