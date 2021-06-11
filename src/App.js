import "./App.css";
import "@fontsource/roboto";
import Main from "./components/Main";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";

function App() {
  return (
    <div className="App">
    <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
