import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_error/bad-request";

export async function GetInfo(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/apolice/:apolice",
    {
      schema: {
        summary: "Get a apolice",
        tags: ["Get infos"],
        params: z.object({
          apolice: z.string(),
        }),
        response: {
          200: z.object({
            name: z.string(),
            CPF: z.string(),
            placa: z.string(),
            veiculo: z.string(),
            apolice: z.string(),
            telefone: z.string(),
            vencimento: z.string(),
            renavam: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { apolice } = request.params;

      const Apolice = await prisma.infoSeguro.findFirst({
        select: {
          name: true,
          CPF: true, // Incluindo CPF no select
          placa: true,
          veiculo: true,
          apolice: true,
          telefone: true,
          vencimento: true,
          renavam: true,
        },
        where: {
          apolice: apolice,
        },
      });

      if (Apolice === null) {
        throw new BadRequest("Não existe nenhuma apólice com esse número.");
      }

      return reply.send(Apolice);
    }
  );
}
