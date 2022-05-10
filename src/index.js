import React from 'react';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Livre from "./routes/livre";
import Ajouter from './routes/ajouter';
import Modifier from './routes/modifier';

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/ajouter" element={<Ajouter />} />
    <Route path="/livre" element={<Livre />}>
    <Route path =":isbn" element={<Livre />} />
  </Route>
  <Route path="/modifier/:isbn" element={<Modifier />} >
  </Route>
     <Route
     path="*"
     element={
       <main style={{ padding: "1rem" }}>
         <p>There's nothing here!</p>
       </main>
     }
   />
  </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
