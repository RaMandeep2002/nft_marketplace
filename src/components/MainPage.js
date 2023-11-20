import React from 'react';
import '../components/styling/MainPageStyle.css';
import { motion } from 'framer-motion';

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{
        duration: 0.8,
        delay: 1,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex p-9 h-[50rem] mt-[8rem]"
    >
      <div className="w-[600px] h-[366px] 2xl:w-[650px] 2xl:px-6 px-2 py-3 mt-20 ml-6 flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-white text-[68.80px] 2xl:text-[100px] font-medium font-['DM Mono'] leading-[90px] tracking-tight">
          Collect Super <br />
          Unique Digital
          <br />
          Artworks
        </div>
        <div className="text-white text-base font-normal font-['DM Mono'] leading-normal tracking-wide">
          AnNFT is the world’s largest NFT marketplace with <br />
          over 45 thousand aritist.
        </div>

        <div className="w-[360px] h-[92px] px-2 py-3 justify-start items-start gap-20 inline-flex">
          <div className="relative">
            <div className="w-[83px] h-[30px] left-[8px] top-0 absolute justify-start items-start gap-2 inline-flex">
              <div className="text-white text-[27.65px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
                95k+
              </div>
              <div className="w-6 h-6 relative" />
            </div>
            <div className="left-0 top-[38px] absolute opacity-60 text-white text-[23.04px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
              Artwork
            </div>
          </div>
          <div className="relative ml-4">
            <div className="left-0 top-[38px] absolute opacity-60 text-white text-[23.04px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
              Artist
            </div>
            <div className="w-[83px] h-[30px] left-0 top-0 absolute justify-start items-center gap-2 inline-flex">
              <div className="text-white text-[27.65px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
                45k+
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="relative">
            <div className="left-0 top-[38px] absolute opacity-60 text-white text-[23.04px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
              Auction
            </div>
            <div className="w-[100px] h-[30px] left-0 top-0 absolute justify-start items-center gap-2 inline-flex">
              <div className="text-white text-[27.65px] font-medium font-['DM Mono'] leading-[30px] tracking-tight">
                60k+
              </div>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[20px]">
        <div className="w-[468.95px] h-[550px] p-[26.61px] ml-[10rem] origin-top-left rotate-[7deg] bg-neutral-700 bg-opacity-30 rounded-[33.26px] backdrop-blur-[26px] flex-col justify-start items-start gap-[26.61px] inline-flex">
          <div className="w-[415.74px] h-[415.74px] rounded-2xl bg-white justify-center items-center inline-flex">
            <img
              className="w-[415.74px] h-[415.74px]"
              src="https://images.unsplash.com/photo-1465788786008-f75a725b34e9?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="somee"
            />
          </div>
          <div className="w-[415.74px] justify-start items-start gap-[65px] inline-flex">
            <div className="text-white text-xl font-medium font-['DM Mono'] leading-[24.94px] tracking-tight">
              Har
              <br />
              LUTHER
            </div>
            <div className="relative w-[100px]">
              <div className="left-0 top-0 absolute text-white text-base font-medium font-['DM Mono'] leading-tight tracking-tight">
                Current Bid
              </div>
              <div className="left-[-0px] top-[33.26px] absolute text-white text-base font-medium font-['DM Mono'] leading-tight tracking-tight">
                7.38 ETH
              </div>
            </div>
            <div className="relative w-[100px]">
              <div className="left-0 top-0 absolute text-white text-base font-medium font-['DM Mono'] leading-tight tracking-tight">
                Ending In
              </div>
              <div className="left-[-0px] top-[33.26px] absolute text-white text-base font-medium font-['DM Mono'] leading-tight tracking-tight">
                15m 30s
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
