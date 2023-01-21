import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainForm } from "./components/MainForm";
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
        <MainForm/>
        <Footer/>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
