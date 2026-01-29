import Header from "./components/layout/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
      </Routes>
    </>
  );
}

export default App;
