import Header from "./components/layout/header/Header";
import { Routes, Route } from "react-router-dom";
import KnowledgeAndNews from "./pages/KnowledgeAndNews/KnowledgeAndNews";
import Domains from "./pages/Domains";
import Hosting from "./pages/Hosting";
import WordPress from "./pages/WordPress";
import OnlineStores from "./pages/OnlineStores";
import VpsHosting from "./pages/VpsHosting";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/wordpress" element={<WordPress />} />
        <Route path="/onlinestores" element={<OnlineStores />} />
        <Route path="/vpshosting" element={<VpsHosting />} />
        <Route path="/*" element={<KnowledgeAndNews />} />
      </Routes>
    </>
  );
}

export default App;
