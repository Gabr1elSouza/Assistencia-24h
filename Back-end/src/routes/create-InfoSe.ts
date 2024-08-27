import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_error/bad-request";

export async function CreateInfoSeguro(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/apolice",
    {
      schema: {
        summary: "Create apolice",
        tags: ["Create"],
        body: z.object({
          name: z.string().min(4),
          CPF: z.string(),
          placa: z.string(),
          veiculo: z.string(),
          telefone: z.string(),
          vencimento: z.string(),
          apolice: z.string(),
          renavam: z.string(),
          Vcontrato: z.string(),
          valorAp: z.string(),
        }),
        response: {
          201: z.object({
            id: z.object({
              id: z.string().uuid(),
              apolice: z.string(),
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      // async function createImage(
      //   infoSeguroId: string,
      //   imageName: string,
      //   imageData: Buffer
      // ) {
      //   try {
      //     const newImage = await prisma.imagem.create({
      //       data: {
      //         nome: imageName,
      //         imagem: imageData,
      //         infoSeguro: {
      //           connect: {
      //             id: infoSeguroId,
      //           },
      //         },
      //       },
      //     });
      //     console.log("Imagem criada com sucesso:", newImage);
      //   } catch (error) {
      //     console.error("Erro ao criar imagem:", error);
      //   }
      // }

      // const imageData = fs.readFileSync("caminho/para/sua/imagem.jpg");
      // const infoSeguroId = "seu_id_info_seguro";
      // const imageName = "imagem1.jpg";

      //createImage(infoSeguroId, imageName, imageData);
      const {
        name,
        placa,
        renavam,
        vencimento,
        veiculo,
        telefone,
        apolice,
        CPF,
        Vcontrato,
        valorAp,
      } = request.body;

      // Use findFirst se você quiser procurar por qualquer correspondência
      const ErrorUnique = await prisma.infoSeguro.findFirst({
        where: {
          OR: [{ name }, { placa }, { renavam }, { CPF }],
        },
      });

      if (ErrorUnique !== null) {
        throw new BadRequest("Esses dados já estão na nossa base de dados.");
      }

      const Apolice = await prisma.infoSeguro.create({
        data: {
          name,
          CPF,
          placa,
          veiculo,
          telefone,
          vencimento,
          apolice,
          renavam,
          Vcontrato,
          valorAp,
        },
      });

      // const novaImagem = await prisma.imagem.create({
      //   data: {
      //     nome: "imagem.jpg",
      //     imagem: imageData,
      //     infoSeguro: {
      //       connect: { id: Apolice.id },
      //     },
      //   },
      // });

      return reply.status(201).send({
        id: {
          id: Apolice.id,
          apolice: Apolice.apolice,
        },
      });
    }
  );
}
