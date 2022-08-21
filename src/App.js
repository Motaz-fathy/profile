import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
