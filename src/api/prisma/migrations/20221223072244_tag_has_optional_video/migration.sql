-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_videoId_fkey`;

-- AlterTable
ALTER TABLE `Tag` MODIFY `videoId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `Video`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
