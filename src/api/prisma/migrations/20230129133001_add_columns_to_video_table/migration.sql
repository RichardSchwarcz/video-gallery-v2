/*
  Warnings:

  - You are about to drop the column `url` on the `Video` table. All the data in the column will be lost.
  - Added the required column `author` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorUrl` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Video` DROP COLUMN `url`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL DEFAULT 'x',
    ADD COLUMN `authorUrl` VARCHAR(191) NOT NULL DEFAULT 'x',
    ADD COLUMN `thumbnailUrl` VARCHAR(191) NOT NULL DEFAULT 'x',
    ADD COLUMN `videoUrl` VARCHAR(191) NOT NULL DEFAULT 'x';
