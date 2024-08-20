import { ApoliceList } from "./Components/ApoliceList";
import { Header } from "./Components/Header";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col">
      <Header />
      <ApoliceList/>
    </div>
  );
}
