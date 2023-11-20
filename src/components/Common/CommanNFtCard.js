import React from 'react';
import { motion } from 'framer-motion';

const commanNFtCard = (data) => {
  return (
    <div className="w-[411px] h-[522px] p-[23.01px] bg-neutral-700 bg-opacity-30  rounded-[28.76px] backdrop-blur-[23.01px] flex-col justify-start items-start gap-[23.01px] inline-flex">
      <div className="w-[359.56px] h-[359.56px] bg-white justify-center items-center inline-flex">
        <img
          className="w-[359.56px] h-[359.56px]"
          src={data.data.image}
          alt=""
        />
      </div>

      <div className="h-[100px] flex-col justify-center items-start gap-[6.92px] flex">
        <div className="relative mt-[-7rem] ">
          <div className="w-[92px] h-[99.35px] left-[272.77px] top-[0.04px] absolute flex-col justify-start items-center gap-2 inline-flex">
            <img
              className="w-[48.43px] h-[48.43px] relative rounded-[86.49px]"
              src={data.data.image}
              alt=""
            />
            <div className="flex-col justify-center items-start gap-[6.92px] flex">
              <div className="text-white text-opacity-20 text-sm font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                Ending In
              </div>
              <div className="text-white text-sm font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                {data.data.endingIn}
              </div>
            </div>
          </div>
          <div className="w-[140px] h-[100px] left-0  absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-[123.68px] inline-flex">
              <div className="flex-col justify-center items-start gap-2 inline-flex">
                <div className="text-white text-xl font-medium font-['DM Mono'] leading-snug tracking-tight">
                  {data.data.nftname}
                </div>
                <div>
                  <span className="text-white text-base font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                    Created by
                  </span>
                  <span className="text-white text-sm font-medium font-['DM Mono'] leading-[17.26px] tracking-tight"></span>
                  <span className="text-white text-xl font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                    {data.data.createby}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-2 flex">
              <div className="text-white text-opacity-20 text-sm font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                Current Bid
              </div>
              <div className="text-white text-sm font-medium font-['DM Mono'] leading-[17.26px] tracking-tight">
                {data.data.currentBid}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default commanNFtCard;
