import logo from "../assets/cPlus Logo + Clube de Benefícios verde.png"

export function Header() {
  return (
    <div className="flex items-center gap-5 font-medium text-sm py-2">
      <img className="w-32" src={logo} alt="" />
    </div>
  );
}
