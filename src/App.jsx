import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/Nabvar";
import { PokemonProvider } from "./PokemonContext";
import PokemonHome from "./components/PokemonHome";
import { Nosotros } from "./components/Nosotros";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<PokemonHome />} />
            {/* Página principal */}
            <Route path="/nosotros" element={<Nosotros />} />
            {/* Página nosotros */}
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </PokemonProvider>
      </div>
    </Router>
  );
}

export default App;



