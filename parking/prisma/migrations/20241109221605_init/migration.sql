/*
  Warnings:

  - You are about to drop the column `location` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `parkings` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "latitude" REAL NOT NULL DEFAULT 1.000000,
    "longitude" REAL NOT NULL DEFAULT 1.000000,
    "country" TEXT NOT NULL
);
INSERT INTO "new_City" ("country", "id", "name", "slug") SELECT "country", "id", "name", "slug" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
CREATE TABLE "new_parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL NOT NULL DEFAULT 1.000000,
    "longitude" REAL NOT NULL DEFAULT 1.000000,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" REAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "parkings_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_parkings" ("cityId", "hourlyRate", "id", "name", "numberOfPlaces", "opened") SELECT "cityId", "hourlyRate", "id", "name", "numberOfPlaces", "opened" FROM "parkings";
DROP TABLE "parkings";
ALTER TABLE "new_parkings" RENAME TO "parkings";
CREATE UNIQUE INDEX "parkings_name_key" ON "parkings"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
