import {
  BookText,
  CalendarFold,
  Car,
  DollarSignIcon,
  Fingerprint,
  IdCard,
  ReceiptText,
  RectangleEllipsis,
  Scroll,
  Smartphone,
} from "lucide-react";
import { ChangeEvent, MouseEvent, useState } from "react";
import { toast } from "sonner";

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
  const [Vcontrato, setVcontrato] = useState("");
  const [valorAp, setValorAp] = useState("");

  function onNameChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function onCpfChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setCPF(event.target.value);
  }
  function onModelChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setVeiculo(event.target.value);
  }
  function onPlacaChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setPlaca(event.target.value);
  }
  function onRenavamChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setRenavam(event.target.value);
  }
  function onVencimentoChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setVencimento(event.target.value);
  }
  function onCnhChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setCnh(event.target.value);
  }
  function onTelefoneChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setTelefone(event.target.value);
  }
  function onApoliceChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setApolice(event.target.value);
  }
  function onApoliceValorChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setValorAp(event.target.value);
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
      cnh,
      Vcontrato,
      valorAp,
    };

    try {
      // Faz a requisição POST para o servidor
      const response = await fetch("https://assistencia-24h.onrender.com/apolice", {
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
        toast.success("Veiculo cadastrado com sucesso!");
      } else {
        // Lida com respostas de erro
        console.error("Erro ao cadastrar veículo:", response.statusText);
        toast.error("Erro ao cadastrar o veiculo, confirme os dados.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="items-center justify-center mt-8">
      <h2 className="ml-32 font-semibold text-lg">
        Formulário para cadastro de veiculo
      </h2>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex mt-4 gap-5">
          <div className="flex-1 gap-4">
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <IdCard />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Nome Completo"
                required
                onChange={onNameChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <Fingerprint />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="CPF"
                required
                onChange={onCpfChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <Smartphone />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Telefone"
                required
                onChange={onTelefoneChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <Car />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Modelo do Veiculo"
                required
                onChange={onModelChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <RectangleEllipsis />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Placa do veiculo"
                required
                onChange={onPlacaChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <BookText />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Renavam"
                required
                onChange={onRenavamChangeInput}
              />
            </div>
          </div>
          <div className="flex-1 gap-4 items-center justify-center ">
            <span className=" left-0 -top-3">Vencimento do contrato:</span>
            <div className="px-1 w-[350px] h-12 py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <CalendarFold />

              <input
                className="flex-1 bg-transparent outline-none border-b focus-ring-0 ::placeholder-gray-400"
                type="date"
                placeholder="Vencimento do contrato"
                required
                onChange={onVencimentoChangeInput}
              />
            </div>

            <div className="px-1 w-[350px] py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <Scroll />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="CNH"
                required
                onChange={onCnhChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <ReceiptText />
              <input
                className="w-full bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Apolice (Número do contrato)"
                required
                onChange={onApoliceChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <DollarSignIcon />
              <input
                className="w-full bg-transparent outline-none border-b focus:ring-0"
                type="text"
                placeholder="Valor da Apolice"
                required
                onChange={onApoliceValorChangeInput}
              />
            </div>
            <div className="px-1 w-[350px] py-1.5 borderb-white/10 rounded-lg text-sm flex items-center gap-3">
              <DollarSignIcon />
              <select
                className="w-full appearance-none bg-zinc-700 outline-none border focus:ring-0 rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5 text-center"
                required
                onChange={(event) => setVcontrato(event.target.value)}
              >
                <option disabled value="">
                  Selecione o plano de cobertura
                </option>
                <option value="Bronze">Bronze</option>
                <option value="Prata">Prata</option>
                <option value="Ouro">Ouro</option>
                <option value="Diamante">Diamante</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        className="flex mx-auto bg-emerald-500 hover:bg-transparent hover:border hover:border-emerald-500 p-4 rounded-md font-bold text-xl transform transition-transform duration-300 hover:scale-95 mt-5"
        type="submit"
        onClick={handleSubmit}
      >
        Cadastrar Veiculo
      </button>
    </div>
  );
}
