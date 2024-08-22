import {
  BookText,
  CalendarFold,
  Car,
  Fingerprint,
  IdCard,
  RectangleEllipsis,
} from "lucide-react";
import { useState } from "react";
import logo from "./assests/cPlus Logo + Clube de Benefícios verde.png";
import { Consulta } from "./Componets/Consulta";

export function App() {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col mt-14 w-2/5 h-auto p-8 bg-zinc-700 rounded-lg">
        <img className="w-[170px] mb-4 ml-32" src={logo} alt="logo cplus" />
        <div className="flex items-center justify-center bg-zinc-800 rounded-md" >
          <button
            className={`p-6 flex-1 ${
              activeTab === "form" ? "active bg-zinc-500/40 rounded-md font-bold shadow-xl" : ""
            }`}
            onClick={() => setActiveTab("form")}
          >
            Formulário
          </button>
          <button
            className={`p-6 flex-1 ${
              activeTab === "consulta" ? "active bg-zinc-500/40 rounded-md font-bold shadow-xl" : ""
            }`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta
          </button>
        </div>

        {activeTab === "form" && (
          <div className="items-center justify-center mt-8">
            <h2 className="font-semibold text-lg">
              Formulário para cadastro de veiculo
            </h2>
            <form className="flex flex-col mt-4 gap-5">
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <IdCard />
                <input
                  className="w-full bg-transparent outline-none border-b ring-0"
                  type="text"
                  placeholder="Nome Completo"
                  required
                />
              </div>
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <Fingerprint />
                <input
                  className="w-full bg-transparent outline-none border-b ring-0"
                  type="text"
                  placeholder="CPF"
                  required
                />
              </div>
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <Car />
                <input
                  className="w-full bg-transparent outline-none border-b ring-0"
                  type="text"
                  placeholder="Modelo do Veiculo"
                  required
                />
              </div>
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <RectangleEllipsis />
                <input
                  className="w-full bg-transparent outline-none border-b ring-0"
                  type="text"
                  placeholder="Placa do veiculo"
                  required
                />
              </div>
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <CalendarFold />
                <input
                  className="flex-1 bg-transparent outline-none border-b focus-ring-0"
                  type="date"
                  placeholder="Vencimento do contrato"
                  required
                />
              </div>
              <div className="px-1 w-auto py-1.5  borderb-white/10 rounded-lg text-sm flex items-center gap-3">
                <BookText />
                <input
                  className="w-full bg-transparent outline-none border-b ring-0"
                  type="text"
                  placeholder="Renavam"
                  required
                />
              </div>
              <button
                className="bg-emerald-500 border border-emerald-500 p-4 rounded-md font-bold text-xl hover:bg-transparent"
                type="submit"
              >
                Cadastrar Veiculo
              </button>
            </form>
          </div>
        )}

        {activeTab === "consulta" && <Consulta />}
      </div>
    </div>
  );
}
