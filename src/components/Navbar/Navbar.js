import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
   
const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };
    return (      
      
        <>
        <a id="Web"></a>        
        <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">  
        <div class="container-fluid">   
           <a class="navbar-brand" href="#">d-Token</a>               
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>                
               </button>              
              <div class="collapse navbar-collapse " id="navbarColor02">
                <ul class="navbar-nav me-auto mb-1 mb-lg-0 float-end">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#web">Web</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#dApp">dApp & Blockchain</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#community">d-Token Community</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#infra">Infrastructure</a>
              </li>       
              <li class="nav-item float-end">
              <button
                className="enableEthereumButton"
                onClick={connectWallet}
              >
                <span className="is-link has-text-weight-bold">
                  {walletAddress && walletAddress.length > 0
                    ? `Connected: ${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet "}
                </span>
              </button>         
              </li>
              </ul>
              
          </div>
        </div>      
      </nav>
      </>
    );
};
 
export default Navbar;