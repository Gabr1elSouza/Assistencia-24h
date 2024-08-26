import { useState } from "react";
import logo from "./assests/cPlus Logo + Clube de Benefícios verde.png";
import { Consulta } from "./Componets/Consulta";

import { Toaster } from 'sonner'
import { Create } from "./Componets/create";

export function App() {
  const [activeTab, setActiveTab] = useState("form");
  

  return (
    <div className="w-full flex items-center justify-center">
      <Toaster position="bottom-right" richColors/>
      <div className="flex flex-col mt-14 w-2/5 h-auto p-8 bg-zinc-700 rounded-lg">
        <img className="w-[170px] mb-4 ml-32" src={logo} alt="logo cplus" />
        <div className="flex items-center justify-center bg-zinc-800 rounded-md">
          <button
            className={`p-6 flex-1 ${
              activeTab === "form"
                ? "active bg-zinc-500/40 rounded-md font-bold shadow-xl"
                : ""
            }`}
            onClick={() => setActiveTab("form")}
          >
            Formulário
          </button>
          <button
            className={`p-6 flex-1 ${
              activeTab === "consulta"
                ? "active bg-zinc-500/40 rounded-md font-bold shadow-xl"
                : ""
            }`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta
          </button>
        </div>

        {activeTab === "form" && (
          <Create/>
        )}

        {activeTab === "consulta" && <Consulta />}
      </div>
    </div>
  );
}
