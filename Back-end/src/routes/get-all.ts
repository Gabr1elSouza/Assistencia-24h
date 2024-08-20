import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_error/bad-request";

export async function getAllInfo(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/all-info",
    {
      schema: {
        summary: "Get all apolice",
        tags: ["Get infos"],

        querystring: z.object({
          pageIndex: z.string().nullable().default("0").transform(Number),
          query: z.string().nullish(),
        }),
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              placa: z.string(),
              veiculo: z.string(),
              telefone: z.string(),
              vencimento: z.string(),
              apolice: z.string(),
              renavam: z.string(),
              CPF: z.string(),
            })
          ),
        },
      },
    },
    async (request, reply) => {
      const { pageIndex, query } = request.query;
      const allInfo = await prisma.infoSeguro.findMany({
        where: query
          ? {
              name: {
                contains: query,
              },
            }
          : {},
        take: 10,
        skip: pageIndex * 10,
      });

      if (allInfo.length === 0) {
        throw new BadRequest("Nenhum dado foi encontrado com sua pesquisa");
      }

      return reply.send(allInfo);
    }
  );
}
