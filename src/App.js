import "./App.css";
import NavBar from "./layouts/NavBar/NavBarFunc";
import Routers from "./routes/Routers";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
