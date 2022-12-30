-- This is an empty migration.
-- rename video column name to title

ALTER TABLE `Video` CHANGE `name` `title` VARCHAR(191) NOT NULL;
