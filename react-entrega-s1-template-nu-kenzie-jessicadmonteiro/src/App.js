import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import PageInitial from "./components/pageIndex";
import Register from "./components/register";
import Render from "./components/render";

function App() {
  const [page, setPage] = useState("")
  

  switch (page) {
    case "pageHome":
      return <Home setPage={setPage}/>;
    default:
      return <PageInitial setPage={setPage}/>;
  }

}

export default App;
