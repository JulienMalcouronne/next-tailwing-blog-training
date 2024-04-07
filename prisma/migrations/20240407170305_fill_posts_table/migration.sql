/*
  Warnings:

  - Added the required column `body` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_updated` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_updated" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
