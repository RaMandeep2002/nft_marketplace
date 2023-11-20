import React from 'react';
import groupImage from '../img/Group.svg';
import frameImage from '../img/Frame.svg';
import listImage from '../img/list.svg';

const CreatOwnNft = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[500px] h-[99px] p-2 flex-col justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-[2px]">
            Be An NFT Creator
          </div>
          <div className="p-2 justify-center items-center gap-4 inline-flex">
            <div className="text-center text-white text-[27.65px] font-semibold font-mono leading-[35px] tracking-[3px]">
              Create & Sell Your Own NFTs
            </div>
          </div>
        </div>
      </div>

      {/* //asdfasd */}
      <div className="flex sm:flex-row justify-center items-center pt-10">
        <div className="w-auto h-auto px-10 justify-start items-start gap-[52px] inline-flex">
          <div className="px-[101px] py-[76px] bg-neutral-700 bg-opacity-30 rounded-[20px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-8 inline-flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[100px] h-[100px] relative">
                  <div className="w-[91.64px] h-[100.03px] left-[4px] top-0 absolute">
                    <div className="w-[100%] h-[27.36px] absolute">
                      <img src={groupImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-white text-xl font-semibold font-mono leading-normal tracking-tight">
                  Create Artworks
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div className="text-center text-white text-base font-normal font-mono leading-[17.26px] tracking-tight">
                  Create your collection <br />
                  and social links and more
                </div>
              </div>
            </div>
          </div>
          <div className="px-[101px] py-[76px] bg-neutral-700 bg-opacity-30 rounded-[20px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-8 inline-flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[100px] h-[100px] relative">
                  <div className="w-[91.64px] h-[100.03px] left-[4px] top-0 absolute">
                    <div className="w-[100%] h-[27.36px] absolute">
                      <img src={frameImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-white text-xl font-semibold font-mono leading-normal tracking-tight">
                  Upload
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div className="text-center text-white text-base font-normal font-mono leading-[17.26px] tracking-tight">
                  Create your collection <br />
                  and social links and more
                </div>
              </div>
            </div>
          </div>
          <div className="px-[101px] py-[76px] bg-neutral-700 bg-opacity-30 rounded-[20px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-8 inline-flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[100px] h-[100px] relative">
                  <div className="w-[91.64px] h-[100.03px] left-[4px] top-0 absolute">
                    <div className="w-[100%] h-[27.36px] absolute">
                      <img src={listImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-white text-xl font-semibold font-mono leading-normal tracking-tight">
                  Listing
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div className="text-center text-white text-sm font-normal font-mono  tracking-tight">
                  Setup and choose between auction
                  <br />
                  fixed price listing or declining listing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatOwnNft;
