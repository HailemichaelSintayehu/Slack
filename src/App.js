import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
// import AppBody from "./components/AppBody";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <AppBody>
          <Sidebar />
          {/* <Routes></Routes> */}
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 10vh;
`;
