import Form from "@pages/Formulaire";
import Home from "@pages/Home";
import Bordeaux from "@pages/Bordeaux";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bordeaux" element={<Bordeaux />} />

        <Route path="/Formulaire" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
