import Form from "@pages/Formulaire";
import Home from "@pages/Home";
import Bordeaux from "@pages/Bordeaux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Partenaires from "@pages/Partenaires";
import Events from "@pages/Events";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />

        <Route path="/bordeaux" element={<Bordeaux />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/Formulaire" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
