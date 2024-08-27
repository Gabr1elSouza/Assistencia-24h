import logo from "../assets/cPlus Logo + Clube de Benefícios verde.png"

export function Header() {
  return (
    <div className="flex items-center gap-3 font-medium text-sm py-2 sm:gap-5">
      <img className="w-28 sm:32" src={logo} alt="logo" />
    </div>
  );
}
