import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Web from "./pages/web";
import dApp from "./pages/dapp";
import Infra from "./pages/infra";
import Faucet from "./pages/faucet";
import Systems from "./pages/systems";
import PageNotFound from "./pages/pagenotfound";

function App() {
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/web" element={<Web />} />
                <Route path="/dapp" element={<dApp />} />
                <Route path="/infra" element={<Infra />} />       
                <Route path="/faucet" element={<Faucet />} />
                <Route path="/systems" element={<Systems />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes> 
        </Router>
       
    );
}
 
export default App;