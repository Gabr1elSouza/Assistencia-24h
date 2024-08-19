import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/apolice", async (request, reply) => {
  const createApoliceSchema = z.object({
    name: z.string().min(4),
    placa: z.string(),
    veiculo: z.string(),
    telefone: z.string(),
    vencimento: z.string(),
    apolice: z.string(),
    renavam: z.string(),
  });
  const data = createApoliceSchema.parse(request.body);

  const apolice = await prisma.infoSeguro.create({
    data: {
      name: data.name,
      placa: data.placa,
      veiculo: data.veiculo,
      telefone: data.telefone,
      vencimento: data.vencimento,
      apolice: data.apolice,
      renavam: data.renavam,
    },
  });
  return { apolice: apolice.id };
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP SERVER RUNING");
});
