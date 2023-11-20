import React, { useState } from 'react';
import CommanNFtCard from './Common/CommanNFtCard';


const TopNft = () => {
  const sampleData = [
    {
      nftname: 'Car Run',
      endingIn: '10h 30m 06s',
      createby: 'Raman',
      currentBid: '3.48 ETH',
      image:
        'https://images.unsplash.com/photo-1699276750162-4fae774d94d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
    },
    {
      nftname: 'Car Run',
      endingIn: '10h 30m 06s',
      createby: 'Raman',
      currentBid: '3.48 ETH',
      image:
        'https://images.unsplash.com/photo-1646427066490-474a01f08a0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
    },
    {
      nftname: 'Car Run',
      endingIn: '10h 30m 06s',
      createby: 'Raman',
      currentBid: '3.48 ETH',
      image:
        'https://images.unsplash.com/photo-1697639171123-0fd9f3a4e1b5?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    },
  ];
  const [data, updateData] = useState(sampleData);
  return (
    <div className=" w-full h-auto mt-[-5rem]">
      <div className="flex justify-center items-center">
        <div className="w-[495px] h-[99px] p-2 flex-col justify-center items-center content-center gap-3 inline-flex">
          <div className="text-center text-white text-base font-large font-mono leading-normal tracking-[5px]">
            NFT Marketplace
          </div>
          <div className="p-2 justify-center items-center gap-4 inline-flex">
            <div className="text-center text-white text-[27.65px] font-semibold font-mono leading-[35px] tracking-wide">
              Spotlight: Projects You Would Love
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto ml-14 mt-4">
        <div className="w-[1320px] h-[72px] mr-2 2xl:ml-[5rem] px-2 py-3 justify-center items-center gap-16 inline-flex">
          <div className="w-[132px] h-12 px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600  rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-xl font-medium font-mono leading-normal tracking-tight">
              Music
            </div>
          </div>
          <div className="w-[132px] px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600 rounded-lg flex-col justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              Art
            </div>
          </div>
          <div className="w-[132px] h-12 px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              Sport
            </div>
          </div>
          <div className="w-[132px] px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              Photography
            </div>
          </div>
          <div className="w-[132px] px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600  rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              Virtual Reality
            </div>
          </div>
          <div className="w-[132px] h-12 px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600  rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              Videos
            </div>
          </div>
          <div className="w-[132px] h-12 px-4 py-3  bg-neutral-700 bg-opacity-30 hover:bg-gradient-to-r from-amber-400 to-pink-600 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              More
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto ">
        <div>
          <div className="flex gap-7 ml-[5rem]  2xl:ml-[10rem] mt-8">
            {data.map((value, index) => {
              return <CommanNFtCard data={value} key={index}></CommanNFtCard>;
            })}
          </div>
          <div className="flex gap-7 ml-[5rem] 2xl:ml-[10rem] mt-8">
            {data.map((value, index) => {
              return <CommanNFtCard data={value} key={index}></CommanNFtCard>;
            })}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[132px] h-12 px-4 py-3 mt-[5rem] mb-[5rem]  bg-neutral-700 bg-opacity-30 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="text-center text-white text-base font-medium font-mono leading-normal tracking-tight">
              View More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNft;
