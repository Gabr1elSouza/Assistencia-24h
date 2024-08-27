import { BookMarked } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface Dados {
  id: string;
  name: string;
  placa: string;
  veiculo: string;
  telefone: string;
  vencimento: string;
  apolice: string;
  renavam: string;
  CPF: string;
  Vcontrato: string
  valorAp: string
}

export function Consulta() {
  const [search, setSearch] = useState(false);
  const [apolice, setApolice] = useState("");
  const [dados, setDados] = useState<Dados | null>(null);

  useEffect(() => {
    if (search) {
      setSearch(false);
      fetch(`https://assistencia-24h.onrender.com/apolice/${apolice}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na resposta da API");
            toast.warning("Erro interno na API");
          }
          return response.json(); // Retorna o JSON extraído
        })
        .then((data) => {
          setDados(data); // Armazena o dado recebido
          toast.success("Dados encontrados!");
        })
        .catch(() => {
          toast.error("Dados não encontrados!");
        });
    }
  }, [search, apolice]);

  function handleSearch(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSearch(true); // Marca para iniciar a pesquisa no useEffect
  }

  return (
    <div className="flex flex-col mt-4 gap-5">
      <h2 className="font-semibold text-lg">Consulta</h2>
      <p>Insira o número da apolice para consulta.</p>
      <div className="flex pt-2 gap-2">
        <BookMarked />
        <input
          className="w-full bg-transparent outline-none border-b ring-0"
          placeholder="Insira o código da sua apolice"
          value={apolice}
          onChange={(e) => setApolice(e.target.value)}
        />
      </div>
      <button
        className="bg-emerald-500 border border-emerald-500 p-4 rounded-md font-bold text-xl hover:bg-transparent"
        onClick={handleSearch}
      >
        Enviar
      </button>

      {dados ? (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Resultados da Consulta:</h3>
          <div className="mt-2">
            <p>Nome: {dados.name}</p>
            <p>Veículo: {dados.veiculo}</p>
            <p>Placa: {dados.placa}</p>
            <p>CPF: {dados.CPF}</p>
            <p>Vencimento: {dados.vencimento}</p>
            <p>Renavam: {dados.renavam}</p>
            <p>Plano Contratado: {dados.Vcontrato}</p>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-red-500">
          Nenhum dado foi encontrado para a apólice fornecida.
        </p>
      )}
    </div>
  );
}
