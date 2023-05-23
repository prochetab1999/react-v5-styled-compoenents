import React from "react";
import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
const GlobalStyle = createGlobalStyle`
body{
  background-color:white;
  min-height: 100vh;
  margin:0;
  color:black;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      {/* <h1>App</h1> */}
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
      {/* <Button disabled>Disabled button</Button>
      <Button secondary>Seconday Button</Button>
      <Button>Primary Button</Button> */}
    </>
  );
}

export default App;
