import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
export default App;