import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<AppBody/>}>
             <Route path = "/sidebar" element = {<Sidebar/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
