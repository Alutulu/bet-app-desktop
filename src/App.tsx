import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Soccer from "./pages/Soccer";
import Tennis from "./pages/Tennis";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soccer" element={<Soccer />} />
                <Route path="/tennis" element={<Tennis />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <p>Bouton vers le Tennis !</p>
//       <p>Bouton vers le Football !</p>
//     </div>
//   );
// }

// export default App;
