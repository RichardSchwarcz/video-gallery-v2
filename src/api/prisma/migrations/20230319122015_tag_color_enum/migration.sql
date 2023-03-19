/*
  Warnings:

  - You are about to alter the column `color` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Tag_color")`.

*/
-- AlterTable
ALTER TABLE `Tag` MODIFY `color` ENUM('gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink') NOT NULL DEFAULT 'gray';
