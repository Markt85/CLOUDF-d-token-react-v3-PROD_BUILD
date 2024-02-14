// Filename - pages/index.js
import { useEffect, useState } from "react";
import Web3 from "web3";

const Home = () => {

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

            <div>
                <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/d-T-2-14-2024.svg" alt="" width="72" height="57"/>
        <h1 class="display-5 fw-bold text-body-emphasis">Web Design & Application Development</h1>
        <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">We specialise in a wide range of web and application development tools. Whatever your project we can help get you up an running quickly with the right tech choice, implmentation and support.

        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get in Touch</button>
        </div>
        <div class="b-example-divider"></div>
        </div>
        </div>

        <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/d-T-2-14-2024.svg" alt="" width="72" height="57"/>
        <h1 class="display-5 fw-bold text-body-emphasis">Web Design & Application Development</h1>
        <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">We specialise in a wide range of web and application development tools. Whatever your project we can help get you up an running quickly with the right tech choice, implmentation and support.

        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Get in Touch</button>
        </div>
        <div class="b-example-divider"></div>
        </div>
        </div>


        <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom">Columns with icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#collection"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#people-circle"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#toggles2"></use></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi" width="1em" height="1em"><use xLinkHref="#chevron-right"></use></svg>
        </a>
      </div>
      test
    </div>
  </div>
        <footer class="py-3 my-4" fixed-bottom>
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Web</a></li>
      <li class="nav-item"><a href="#dApp" class="nav-link px-2 text-muted">dApp</a></li>
      <li class="nav-item"><a href="#infra" class="nav-link px-2 text-muted">Infrastructure</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact</a></li>
    </ul>
    <p class="text-center text-muted">d-token.io | d-token.eth | hello@d-token.io</p>
  </footer>
    </div>
        

    
  
    
   


	);
};


export default Home;
