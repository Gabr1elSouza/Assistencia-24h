-- CreateTable
CREATE TABLE "infoSeguros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "vencimento" TEXT NOT NULL,
    "apolice" TEXT NOT NULL,
    "renavam" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "imagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "imagem" BLOB NOT NULL,
    "infoSeguroId" TEXT NOT NULL,
    CONSTRAINT "imagens_infoSeguroId_fkey" FOREIGN KEY ("infoSeguroId") REFERENCES "infoSeguros" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_name_key" ON "infoSeguros"("name");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_CPF_key" ON "infoSeguros"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_placa_key" ON "infoSeguros"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_apolice_key" ON "infoSeguros"("apolice");
