/*
  Warnings:

  - Made the column `deadline` on table `todos` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_todos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" DATETIME NOT NULL,
    "listID" TEXT NOT NULL,
    CONSTRAINT "todos_listID_fkey" FOREIGN KEY ("listID") REFERENCES "lists" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_todos" ("check", "createdAt", "deadline", "id", "listID", "title") SELECT "check", "createdAt", "deadline", "id", "listID", "title" FROM "todos";
DROP TABLE "todos";
ALTER TABLE "new_todos" RENAME TO "todos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
