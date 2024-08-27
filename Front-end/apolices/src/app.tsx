import { ApoliceList } from "./Components/ApoliceList";
import { Header } from "./Components/Header";

export function App() {
  return (
    <div className="w-full max-w-[1216px] mx-auto py-5 px-4 sm:px-6 flex flex-col">
      <Header />
      <ApoliceList/>
    </div>
  );
}
