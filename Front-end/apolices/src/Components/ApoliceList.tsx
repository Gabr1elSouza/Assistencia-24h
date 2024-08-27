import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

interface Associados {
  id: string;
  name: string;
  placa: string;
  veiculo: string;
  telefone: string;
  vencimento: string;
  apolice: string;
  renavam: string;
  CPF: string;
  Vcontrato: string;
  valorAp: string;
  cnh: string;
}

export function ApoliceList() {
  const [SearchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [associados, setAssociados] = useState<Associados[]>([]);

  const totalPages = Math.ceil(associados.length / 10);

  const url = new URL("https://assistencia-24h.onrender.com/all-info");

  url.searchParams.set("pageIndex", String(page - 1));
  if (SearchInput.length > 0) {
    url.searchParams.set("query", SearchInput);
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAssociados(data);
      });
  }, [page, SearchInput]);

  function GoToNextPage() {
    setPage(page + 1);
  }

  function GoToPreviousPage() {
    setPage(page - 1);
  }
  function GoToLastPage() {
    setPage(totalPages);
  }
  function GoToFristPage() {
    setPage(1);
  }

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
    setPage(1);
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
        <h1 className="text-lg sm:text-2xl font-bold">Apólices</h1>
        <div className="flex-1 flex sm:max-w-xs px-3 py-1.5 border border-white/10 rounded-lg text-sm items-center gap-3">
          <Search className="text-emerald-400" />
          <input
            onChange={onSearchInputChange}
            className="bg-transparent flex-1 outline-none focus:ring-0"
            placeholder="Buscar nome do associado"
          />
        </div>
      </div>

      <div className="border border-white/20 rounded-lg mt-4 overflow-x-auto">
        {associados.length > 0 ? (
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-2 py-2 text-left">Id</th>
                <th className="px-2 py-2 text-left">Nome</th>
                <th className="px-2 py-2 text-left">CPF</th>
                <th className="px-2 py-2 text-left">Veiculo/Placa</th>
                <th className="px-2 py-2 text-left">Telefone</th>
                <th className="px-2 py-2 text-left">Vencimento</th>
                <th className="px-2 py-2 text-left">Apolice</th>
                <th className="px-2 py-2 text-left">V. Apolice</th>
                <th className="px-2 py-2 text-left">Plano</th>
                <th className="px-2 py-2 text-left">Renavam</th>
              </tr>
            </thead>
            <tbody>
              {associados.map((associado) => (
                <tr key={associado.id} className="border-b border-white/10">
                  <td className="px-2 py-2">{associado.id}</td>
                  <td className="px-2 py-2">{associado.name}</td>
                  <td className="px-2 py-2">{associado.CPF}</td>
                  <td className="px-2 py-2">
                    <div className="flex flex-col gap-1">
                      <span>{associado.veiculo}</span>
                      <span className="font-semibold">{associado.placa}</span>
                    </div>
                  </td>
                  <td className="px-2 py-2">{associado.telefone}</td>
                  <td className="px-2 py-2">{associado.vencimento}</td>
                  <td className="px-2 py-2">{associado.apolice}</td>
                  <td className="px-2 py-2">{associado.valorAp}</td>
                  <td className="px-2 py-2">{associado.Vcontrato}</td>
                  <td className="px-2 py-2">{associado.renavam}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="px-2 py-2" colSpan={3}>
                  Mostrando {associados.length < 10 ? associados.length : "10"}{" "}
                  de {associados.length} items
                </td>
                <td className="px-2 py-2 text-right" colSpan={7}>
                  <div className="inline-flex items-center gap-2">
                    <span>
                      Página {page} de {totalPages}
                    </span>

                    <div className="flex gap-1">
                      <button
                        className="bg-black/10 border border-white/10 rounded-md p-1"
                        onClick={GoToFristPage}
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>
                      <button
                        className="bg-black/10 border border-white/10 rounded-md p-1"
                        onClick={GoToPreviousPage}
                        disabled={page === 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        className="bg-black/20 border border-white/10 rounded-md p-1"
                        onClick={GoToNextPage}
                        disabled={page === totalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        className="bg-black/20 border border-white/10 rounded-md p-1"
                        onClick={GoToLastPage}
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="p-4 text-center text-gray-500">
            Nenhum dado encontrado.
          </div>
        )}
      </div>
      <footer className="text-zinc-300 font-bold flex items-center justify-center mt-4 sm:mt-10">
        cPlus 2024&copy;
      </footer>
    </div>
  );
}
