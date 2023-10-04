import logo from "./logo.svg";
import "./App.css";
import Home from "./components/page/Home/Home";
import { SymbolProvider } from "./context/AllSymbolContext";
import { WatchListProvider } from "./context/WatchListSymbolContext";
function App() {
  return (
    <div className="App">
      <SymbolProvider>
        <WatchListProvider>
          <Home />
        </WatchListProvider>
      </SymbolProvider>
    </div>
  );
}

export default App;
