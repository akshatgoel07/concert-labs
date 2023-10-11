import "./App.css";
import {Helmet} from "react-helmet";

import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Concert Labs </title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Concert Labs" />
            </Helmet>
      <Navigation />
    </BrowserRouter>
  );
}
export default App;