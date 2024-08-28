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
      const response = await fetch(
        "https://assistencia-24h.onrender.com/apolice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
    <div className="flex flex-col items-center justify-center mt-8 w-full">
      <h2 className="text-center font-semibold text-lg">
        Formulário para cadastro de veículo
      </h2>
      <div className="flex flex-col md:flex-row mt-8 gap-5 items-center justify-center">
        <div className="flex-1 gap-4">
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <IdCard />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Nome Completo"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <Fingerprint />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="CPF"
              required
              onChange={(e) => setCPF(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <Smartphone />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Telefone"
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <Car />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Modelo do Veículo"
              required
              onChange={(e) => setVeiculo(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <RectangleEllipsis />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Placa do Veículo"
              required
              onChange={(e) => setPlaca(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <BookText />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Renavam"
              required
              onChange={(e) => setRenavam(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 gap-4">
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <ReceiptText />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="CNH"
              required
              onChange={(e) => setCnh(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <CalendarFold />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Data de Vencimento"
              required
              onChange={(e) => setVencimento(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <Scroll />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Apólice"
              required
              onChange={(e) => setApolice(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
            <DollarSignIcon />
            <input
              className="w-full bg-transparent outline-none border-b ring-0"
              type="text"
              placeholder="Valor da Apólice"
              required
              onChange={(e) => setValorAp(e.target.value)}
            />
          </div>
          <div className="px-1 w-full max-w-[350px] h-12 py-1.5 border-b border-white/10 rounded-lg text-sm flex items-center gap-3">
          <select
                className="w-full appearance-none bg-zinc-700 outline-none border focus:ring-0 rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block p-2.5 text-center"
                required
                onChange={(event) => setVcontrato(event.target.value)}
              >
                <option className="text-zinc-500" value="">
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
      <button
        className="mt-8 bg-emerald-500 border border-emerald-500 p-4 rounded-md font-bold text-xl hover:bg-transparent hover:border-emerald-500"
        onClick={handleSubmit}
      >
        Cadastrar Veículo
      </button>
    </div>
  );
}
