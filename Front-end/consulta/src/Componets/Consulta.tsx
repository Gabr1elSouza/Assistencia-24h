import { BookMarked } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";

interface ConsultaProps {
  Apolice: string;
  setApolice: (value: string) => void;
  onSearch: () => void;
  search: boolean;
  setSearch: (value: string) => void;
}

export function Consulta() {
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
  }

  const [search, setSearch] = useState(false);
  const [apolice, setApolice] = useState("");
  const [dados, setDados] = useState<Dados[]>([]);

  useEffect(() => {
    if (search) {
      setSearch(false);
      fetch(`http://localhost:3333/apolice/${apolice}`)
        .then((response) => response.json())
        .then((data) => {
          setSearch(false); // Reseta o estado de busca
          setDados(data);
          console.log(dados);
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
          <div key={dados.id} className="mt-2">
            <p>Nome: {dados.name}</p>
            <p>Veículo: {dados.veiculo}</p>
            <p>Placa: {dados.placa}</p>
            <p>CPF: {dados.CPF}</p>
            <p>Vencimento: {dados.vencimento}</p>
            <p>Renavam: {dados.renavam}</p>
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
