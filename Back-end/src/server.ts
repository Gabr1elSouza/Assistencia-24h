import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { CreateInfoSeguro } from "./routes/create-InfoSe";
import { getAllInfo } from "./routes/get-all";
import { GetInfo } from "./routes/getInfo";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { errorHandler } from "./error-handler";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin:'*',
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Assistência 24h cPlus",
      description:
        "Especificações de Back-end para cadastro e consulta de apolices",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.register(CreateInfoSeguro);
app.register(GetInfo);
app.register(getAllInfo);

app.setErrorHandler(errorHandler);

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.listen({ port: 3333, host:'0.0.0.0' }).then(() => {
  console.log("HTTP SERVER RUNNING");
});
