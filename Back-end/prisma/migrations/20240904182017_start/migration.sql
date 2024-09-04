-- CreateTable
CREATE TABLE "infoSeguros" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "vencimento" TEXT NOT NULL,
    "apolice" TEXT NOT NULL,
    "valorAp" TEXT NOT NULL,
    "Vcontrato" TEXT NOT NULL,
    "renavam" TEXT NOT NULL,

    CONSTRAINT "infoSeguros_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_name_key" ON "infoSeguros"("name");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_CPF_key" ON "infoSeguros"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_placa_key" ON "infoSeguros"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "infoSeguros_apolice_key" ON "infoSeguros"("apolice");
