-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "latitude" REAL NOT NULL DEFAULT 1.500000,
    "longitude" REAL NOT NULL DEFAULT 1.500000,
    "country" TEXT NOT NULL
);
INSERT INTO "new_City" ("country", "id", "latitude", "longitude", "name", "slug") SELECT "country", "id", "latitude", "longitude", "name", "slug" FROM "City";
DROP TABLE "City";
ALTER TABLE "new_City" RENAME TO "City";
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
CREATE UNIQUE INDEX "City_slug_key" ON "City"("slug");
CREATE TABLE "new_parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL NOT NULL DEFAULT 1.500000,
    "longitude" REAL NOT NULL DEFAULT 1.500000,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" BOOLEAN NOT NULL DEFAULT true,
    "hourlyRate" REAL NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "parkings_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_parkings" ("cityId", "hourlyRate", "id", "latitude", "longitude", "name", "numberOfPlaces", "opened") SELECT "cityId", "hourlyRate", "id", "latitude", "longitude", "name", "numberOfPlaces", "opened" FROM "parkings";
DROP TABLE "parkings";
ALTER TABLE "new_parkings" RENAME TO "parkings";
CREATE UNIQUE INDEX "parkings_name_key" ON "parkings"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
