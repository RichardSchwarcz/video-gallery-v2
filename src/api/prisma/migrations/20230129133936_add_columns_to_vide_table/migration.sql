-- AlterTable
ALTER TABLE `Video` ALTER COLUMN `author` DROP DEFAULT,
    ALTER COLUMN `authorUrl` DROP DEFAULT,
    ALTER COLUMN `thumbnailUrl` DROP DEFAULT,
    ALTER COLUMN `videoUrl` DROP DEFAULT;
