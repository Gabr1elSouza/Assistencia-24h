/*
  Warnings:

  - You are about to drop the column `slug` on the `infoSeguros` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_infoSeguros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "vencimento" TEXT NOT NULL,
    "apolice" TEXT NOT NULL,
    "renavam" TEXT NOT NULL
);
INSERT INTO "new_infoSeguros" ("apolice", "id", "name", "placa", "renavam", "telefone", "veiculo", "vencimento") SELECT "apolice", "id", "name", "placa", "renavam", "telefone", "veiculo", "vencimento" FROM "infoSeguros";
DROP TABLE "infoSeguros";
ALTER TABLE "new_infoSeguros" RENAME TO "infoSeguros";
CREATE UNIQUE INDEX "infoSeguros_name_key" ON "infoSeguros"("name");
CREATE UNIQUE INDEX "infoSeguros_placa_key" ON "infoSeguros"("placa");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
