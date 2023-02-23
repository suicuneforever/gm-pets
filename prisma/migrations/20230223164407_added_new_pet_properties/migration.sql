/*
  Warnings:

  - Added the required column `age` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animal` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breed` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("id", "name", "ownerId") SELECT "id", "name", "ownerId" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
