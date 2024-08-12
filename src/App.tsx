import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { ThisIsUs } from "./pages/ThisIsUs/ThisIsUs";
import { Footer } from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/this-is-us" element={<ThisIsUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
