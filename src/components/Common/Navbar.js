import React from 'react';
import { motion } from 'framer-motion';
// import { accounts } from 'web3/lib/commonjs/eth.exports';
import { useEffect, useState } from 'react';
var Web3 = require('web3');

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);
  const connectWallet = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        // console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Please Install Metamask!');
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != 'undefined' && typeof window.ethereum != 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          // console.log(accounts[0]);
        } else {
          console.log('Connect to MetaMask using the Connect button');
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log('Please install MetaMask');
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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
      className="navbar flex-no-wrap fixed top-0 flex w-full  p-8 z-10 justify-between items-center bg-[#191919] bg-opacity-60"
    >
      <div className="right-section flex">
        <img
          src="https://www.antiersolutions.com/wp-content/uploads/2019/03/our-brand-identi-min.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="text-white text-[27.65px] font-['Quicksand'] font-bold leading-normal tracking-normal ml-4 bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
          An
          <sup className="tracking-[1px]">
            N
            <span className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
              FT
            </span>
          </sup>
        </h1>
      </div>

      <div className="center-section ml-10">
        <ul className="flex gap-5">
          <li className="text-white mr-4 text-xl hover:text-amber-400 hover:underline font-medium leading-normal tracking-tight cursor-pointer">
            Explore
          </li>
          <li className="text-white mr-4 text-xl hover:text-amber-400 hover:underline font-medium leading-normal tracking-tight cursor-pointer">
            Stats
          </li>
          <li className="text-white mr-4 text-xl hover:text-amber-400 hover:underline font-medium leading-normal tracking-tight  cursor-pointer">
            Buy/Sell
          </li>
          <li className="text-white mr-4 text-xl  hover:text-amber-400 hover:underline font-medium leading-normal tracking-tight cursor-pointer">
            Listing
          </li>
          <li className="text-white mr-4 cursor-pointer hover:text-amber-400 hover:underline text-xl font-medium leading-normal tracking-tight">
            Create
          </li>
        </ul>
      </div>
      <div className="left-section flex items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'bounce', stiffness: 600 }}
          className="mr-6 inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'bounce', stiffness: 600 }}
          className="w-auto h-[25px] p-5  bg-gradient-to-r from-amber-600 to-pink-600 rounded-[30px] justify-center items-center gap-2 inline-flex"
        >
          <span
            className="text-white text-md font-medium leading-normal tracking-tight"
            onClick={connectWallet}
          >
            {walletAddress && walletAddress.length > 0
              ? `${walletAddress.substring(0, 6)}xxx${walletAddress.substring(
                  38
                )}`
              : 'Connect Wallet'}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
