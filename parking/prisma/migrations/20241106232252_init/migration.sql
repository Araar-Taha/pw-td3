/*
  Warnings:

  - You are about to drop the column `location` on the `parkings` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
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
