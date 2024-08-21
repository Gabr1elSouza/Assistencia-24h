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
}

export async function ApoliceList() {
    const [SearchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);
    const [associados, setAssociados] = useState<Associados[]>([]);
  
    const totalPages = Math.ceil(associados.length / 10);
  
    const url = new URL("http://localhost:3333/all-info");
  
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
  
    function onSearchInputCHange(event: ChangeEvent<HTMLInputElement>) {
      setSearchInput(event.target.value);
      setPage(1);
    }
  
    return (
      <div className="">
        <div className="flex items-center gap-3 ">
          <h1 className="text-2xl font-bold">Apolices</h1>
          <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
            <Search className="size-4 text-emerald-400" />
            <input
              onChange={onSearchInputCHange}
              className="bg-transparent flex-1 outline-none focus-ring-0"
              placeholder="Buscar nome do associado"
            />
          </div>
        </div>
  
        <div className="border border-white/20 rounded-lg mt-4">
          {associados.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Id
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Nome
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    CPF
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Veiculo/Placa
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Telefone
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Vencimento
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Apolice
                  </th>
                  <th className="px-2.5 py-3 text-sm font-semibold text-left">
                    Renavam
                  </th>
                </tr>
              </thead>
              <tbody>
                {associados.map((associado) => (
                  <tr key={associado.id} className="border-b border-white/10">
                    <td className="px-4 py-3 text-sm">{associado.id}</td>
                    <td className="px-4 py-3 text-sm">{associado.name}</td>
                    <td className="px-4 py-3 text-sm">{associado.CPF}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-col gap-1">
                        <span>{associado.veiculo}</span>
                        <span className="font-semibold">{associado.placa}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{associado.telefone}</td>
                    <td className="px-4 py-3 text-sm">{associado.vencimento}</td>
                    <td className="px-4 py-3 text-sm">{associado.apolice}</td>
                    <td className="px-4 py-3 text-sm">{associado.renavam}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-4 py-3 text-sm" colSpan={3}>
                    Mostrando {associados.length < 10 ? associados.length : "10"}{" "}
                    de {associados.length} items
                  </td>
                  <td className="px-4 py-3 text-sm text-right" colSpan={3}>
                    <div className="inline-flex items-center gap-14 ">
                      <span>
                        Página {page} de {totalPages}
                      </span>
  
                      <div className="flex gap-1.5">
                        <button
                          className="bg-black/10 border border-white/10 rounded-md p-1.5"
                          onClick={GoToFristPage}
                        >
                          <ChevronsLeft className="size-4" />
                        </button>
                        <button
                          className="bg-black/10 border border-white/10 rounded-md p-1.5"
                          onClick={GoToPreviousPage}
                          disabled={page === 1}
                        >
                          <ChevronLeft className="size-4" />
                        </button>
                        <button
                          className="bg-black/20 border border-white/10 rounded-md p-1.5"
                          onClick={GoToNextPage}
                          disabled={page === totalPages}
                        >
                          <ChevronRight className="size-4" />
                        </button>
                        <button
                          className="bg-black/20 border border-white/10 rounded-md p-1.5"
                          onClick={GoToLastPage}
                        >
                          <ChevronsRight className="size-4" />
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
      </div>
    );
  }
