import { faker } from "@faker-js/faker";

export const associados = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    vencimento: faker.date.future({ years: 5 }),
    renavam: faker.number.int(),
    apolice: faker.number.int(),
    placa: faker.vehicle.vrm(),
    veiculo: faker.vehicle.model().toLocaleUpperCase(),
    telefone: faker.phone.number(),
    CPF: faker.number.int({ min: 800, max: 1000 }),
  };
});
