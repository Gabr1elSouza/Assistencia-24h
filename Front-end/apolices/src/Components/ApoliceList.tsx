import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

export function ApoliceList() {
  const [SearchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [associados, setAssociados] = useState([]);

  const totalPages = Math.ceil(associados.length / 10);

  useEffect(() => {
    fetch("http://localhost:3333/all-info")
      .then((response) => response.json())
      .then((data) => {
        setAssociados(data);
      });
  }, [page]);

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
  }
  return (
    <div className="">
      <div className="flex items-center gap-3 ">
        <h1 className="text-2xl font-bold">Apolices</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-400" />
          <input
            onChange={onSearchInputCHange}
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar nome do associado"
          />
        </div>
        {SearchInput}
      </div>
      <div className=" border border-white/20 rounded-lg mt-4">
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
            {associados.map((item) => {
              return (
                <tr key={item.id} className="border-b border-white/10">
                  <td className="px-4 py-3 text-sm">{item.id}</td>
                  <td className="px-4 py-3 text-sm">{item.name}</td>
                  <td className="px-4 py-3 text-sm">{item.CPF}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-col gap-1">
                      <span> {item.veiculo}</span>
                      <span className="font-semibold">{item.placa}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{item.telefone}</td>
                  <td className="px-4 py-3 text-sm ">{item.vencimento}</td>
                  <td className="px-4 py-3 text-sm ">{item.apolice}</td>
                  <td className="px-4 py-3 text-sm ">{item.renavam}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="">
            <td className="px-4 py-3 text-sm" colSpan={3}>
              Mostrando {associados.length < 10 ? associados.length : "10"} de{" "}
              {associados.length} items
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
                    {" "}
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button
                    className="bg-black/10 border border-white/10 rounded-md p-1.5"
                    onClick={GoToPreviousPage}
                    disabled={page === 1}
                  >
                    {" "}
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    className="bg-black/20 border border-white/10 rounded-md p-1.5"
                    onClick={GoToNextPage}
                    disabled={page === totalPages}
                  >
                    {" "}
                    <ChevronRight className="size-4" />
                  </button>
                  <button
                    className="bg-black/20 border border-white/10 rounded-md p-1.5"
                    onClick={GoToLastPage}
                  >
                    {" "}
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
