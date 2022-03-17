import About from "./components/About";
import Services from "./components/Services";
import Price from "./components/Price";
import "./style/App.css";
import Profile from "./components/sub-components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <div className="main">
        <About />
        <Services />
        <Price />
      </div>
    </div>
  );
}

export default App;
