import "./styles.scss";
import MovieFinder from "./components/MovieFinder";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      {/* <ThemeToggle /> */}
      <MovieFinder />
      <Footer />
    </div>
  );
}

export default App;
