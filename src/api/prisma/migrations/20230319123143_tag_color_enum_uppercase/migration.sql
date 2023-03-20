/*
  Warnings:

  - You are about to alter the column `color` on the `Tag` table. The data in that column could be lost. The data in that column will be cast from `Enum("Tag_color")` to `Enum("Tag_color")`.

*/
-- AlterTable
ALTER TABLE `Tag` MODIFY `color` ENUM('GRAY', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'TEAL', 'BLUE', 'CYAN', 'PURPLE', 'PINK') NOT NULL DEFAULT 'GRAY';
