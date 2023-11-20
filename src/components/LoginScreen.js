import React, { useState, useEffect } from 'react';

const LoginScreen = ({ onConnectMetamask }) => {
  return (
    <div className="flex justify-center items-center mt-[8rem] ">
      <div className="w-[400px] h-[200px] flex-col rounded-[10px] justify-center items-center gap-18 inline-flex bg-neutral-700 bg-opacity-30">
        <div className="w-[250px] h-[60px] justify-start items-center gap-2 inline-flex">
          <span className="text-white text-md font-medium leading-normal tracking-tight">
            Connect To Wallet
          </span>
        </div>

        <div className="w-[250px] h-[60px] pl-5 bg-gradient-to-r from-amber-400 to-pink-600 rounded-[10px] justify-start items-center gap-2 inline-flex">
          <button
            className=" text-white text-xl font-medium font-mono leading-normal tracking-tight"
            onClick={onConnectMetamask}
          >
            <span className="text-white text-md font-medium leading-normal tracking-tight">
              MetaMask
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
