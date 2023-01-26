
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Main from "./components/Main.jsx";


function App() {




  return (<div className="App">
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Main/>}>

    </Route>

    </Routes>

    </BrowserRouter>
  </div>);
}

export default App;
