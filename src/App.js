import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <h1>Let's build slack</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Header />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
