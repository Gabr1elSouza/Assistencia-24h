import {
  BookText,
  CalendarFold,
  Car,
  Fingerprint,
  IdCard,
  RectangleEllipsis,
  Scroll,
  Smartphone,
} from "lucide-react";
import { ChangeEvent, MouseEvent, useState } from "react";

export function Create() {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [renavam, setRenavam] = useState("");
  const [cnh, setCnh] = useState("");
  const [telefone, setTelefone] = useState("");
  const [apolice, setApolice] = useState("");

  function onNameChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    console.log(name);
  }
  function onCpfChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setCPF(event.target.value);
    console.log(CPF);
  }
  function onModelChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setVeiculo(event.target.value);
    console.log(veiculo);
  }
  function onPlacaChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setPlaca(event.target.value);
    console.log(placa);
  }
  function onRenavamChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setRenavam(event.target.value);
    console.log(renavam);
  }
  function onVencimentoChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setVencimento(event.target.value);
    console.log(vencimento);
  }
  function onCnhChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setCnh(event.target.value);
    console.log(cnh);
  }
  function onTelefoneChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setTelefone(event.target.value);
    console.log(telefone);
  }
  function onApoliceChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setApolice(event.target.value);
    console.log(apolice);
  }

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Dados a serem enviados no corpo da requisição
    const data = {
      name,
      CPF,
      placa,
      veiculo,
      telefone,
      vencimento,
      apolice,
      renavam,
    };

    try {
      // Faz a requisição POST para o servidor
      const response = await fetch("http://localhost:3333/apolice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Resposta bem-sucedida
        const result = await response.json();
        console.log("Veículo cadastrado com sucesso:", result);
      } else {
        // Lida com respostas de erro
        console.error("Erro ao cadastrar veículo:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="items-center justify-center mt-8">
      <h2 className="font-semibold text-lg">
        Formulário para cadastro de veiculo
      </h2>
      <div className="flex flex-col mt-4 gap-5">
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <IdCard />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Nome Completo"
            required
            onChange={onNameChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <Fingerprint />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="CPF"
            required
            onChange={onCpfChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <Smartphone />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Telefone"
            required
            onChange={onTelefoneChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <Car />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Modelo do Veiculo"
            required
            onChange={onModelChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <RectangleEllipsis />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Placa do veiculo"
            required
            onChange={onPlacaChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <CalendarFold />
          <input
            className="flex-1 bg-transparent outline-none border-b focus-ring-0"
            type="date"
            placeholder="Vencimento do contrato"
            required
            onChange={onVencimentoChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <BookText />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Renavam"
            required
            onChange={onRenavamChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <Scroll />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="CNH"
            required
            onChange={onCnhChangeInput}
          />
        </div>
        <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
          <Scroll />
          <input
            className="w-full bg-transparent outline-none border-b ring-0"
            type="text"
            placeholder="Apolice (Número do contrato)"
            required
            onChange={onApoliceChangeInput}
          />
        </div>
        <button
          className="bg-emerald-500 border border-emerald-500 p-4 rounded-md font-bold text-xl hover:bg-transparent"
          type="submit"
          onClick={handleSubmit}
        >
          Cadastrar Veiculo
        </button>
      </div>
    </div>
  );
}
