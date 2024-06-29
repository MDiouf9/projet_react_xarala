import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RendezVous from "./pages/RendezVous";
import Patient from "./pages/Patient";
import MonCompte from "./composants/MonCompte";
import Connecter from "./pages/Connecter";
import Sinscrire from "./pages/Sinscrire";
import Dashbord from "./pages/Dashbord";
import PagesProfile from "./pages/PagesProfile";

import VoirPatient from "./pages/VoirPatient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RendezVous" element={<RendezVous />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/MonCompte" element={<MonCompte />} />
        <Route path="/Connecter" element={<Connecter />} />
        <Route path="/Sinscrire" element={<Sinscrire />} />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/PagesProfile" element={<PagesProfile />} />
        <Route path="/VoirPatient" element={<VoirPatient />} />
      </Routes>
    </>
  );
}

export default App;
