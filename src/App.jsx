import "./styles.scss";
import MovieFinder from "./components/MovieFinder";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <ThemeToggle /> */}
      <MovieFinder />
      <Footer />
    </div>
  );
}

export default App;
