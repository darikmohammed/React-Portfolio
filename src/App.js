import About from "./components/About";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Price from "./components/Price";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Services />
      <Price />
      {/* footer */}
    </div>
  );
}

export default App;
