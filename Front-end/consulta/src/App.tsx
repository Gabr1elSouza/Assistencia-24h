import {IdCard} from "lucide-react"
import { useState } from "react";
import logo from './assests/cPlus Logo + Clube de Benefícios verde.png'

function App() {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col mt-14 w-2/5 h-auto p-8 bg-zinc-700 rounded-lg ">
          <img className="w-40 mb-4" src={logo} alt="logo cplus" />
        <div className="flex items-center justify-center">
          <button
            className={`px-8  ${activeTab === "form" ? "active bg-zinc-500/40" : ""}`}
            onClick={() => setActiveTab("form")}
          >
            Formulário
          </button>
          <button
            className={`px-3  ${
              activeTab === "consulta" ? "active bg-zinc-500/40" : ""
            }`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta
          </button>
        </div>

        {activeTab === "form" && (
          <div className=" items-center justify-center mt-8">
            <h2 className="font-semibold text-lg md:text-sm ">Formulário para cadastro de veiculo</h2>
            <form className="flex flex-col mt-4 gap-5">
              <div className=" flex pt-2 gap-2">
              <IdCard />
              <input className="w-full bg-transparent outline-none border-b ring-0" type="text" placeholder="Nome Completo" required />
              </div>
              <input className="pt-2 bg-transparent outline-none border-b ring-0" type="text" placeholder="CPF" required />
              <input className="pt-2 bg-transparent outline-none border-b ring-0" type="text" placeholder="Modelo do Veiculo" required />
              <input className="pt-2 bg-transparent outline-none border-b ring-0" type="text" placeholder="Placa do veiculo" required />
              <input className="pt-2 bg-transparent outline-none border-b ring-0"
                type="text"
                placeholder="Vencimento do contrato"
                required
              />
              <input className="pt-2 bg-transparent outline-none border-b ring-0" type="text" placeholder="Renavam" required />
              <button className="bg-emerald-500 p-4 rounded-md font-bold text-xl" type="submit">Cadastra Veiculo</button>
            </form>
          </div>
        )}

        {activeTab === "consulta" && (
          <div className="flex flex-col mt-4 gap-5">
            <h2 className="font-semibold text-lg">Consulta</h2>
            <p>Insira os dados para consulta...</p>
            <input className="pt-2 bg-transparent outline-none border-b ring-0" placeholder="Insira o código da sua apolice" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
