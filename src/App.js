import React, { useState, useEffect } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import LandingPage from './components/LandingPage';
const App = () => {
  const [isMetamaskConnected, setMetamaskConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  useEffect(() => {
    addWalletListener();
  }, [walletAddress]);
  const handleConnectMetamask = () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        setMetamaskConnected(true);
        // console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Please Install Metamask!');
    }
  };

  const addWalletListener = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      window.ethereum.on('accountsChanged', (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress('');
      console.log('Please install MetaMask');
    }
  };
  return (
    <div>
      {isMetamaskConnected ? (
        <LandingPage />
      ) : (
        <LoginScreen onConnectMetamask={handleConnectMetamask} />
      )}
    </div>
  );
};

export default App;
