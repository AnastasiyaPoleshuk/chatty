import { Header } from "./components/header/Header";
import { Main } from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
