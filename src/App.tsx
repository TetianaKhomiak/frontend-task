import Header from "./components/layout/header/Header";
import { Routes, Route } from "react-router-dom";
import KnowledgeAndNews from "./pages/KnowledgeAndNews";
import Domains from "./pages/Domains";
import Hosting from "./pages/Hosting";
import WordPress from "./pages/WordPress";
import OnlineStores from "./pages/OnlineStores";
import VpsHosting from "./pages/VpsHosting";
import Footer from "./components/layout/footer/Footer";
import BlogPostPage from "./components/blog/BlogPostPage";

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
        <Route path="/blog" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
