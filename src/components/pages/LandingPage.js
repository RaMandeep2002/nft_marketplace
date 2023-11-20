import React from 'react';
import Navbar from '../Common/Navbar';
import MainPage from './MainPage';
import TopNft from '../Common/TopNft';
import CreatOwnNft from '../Common/CreatOwnNft';
const LandingPage = () => {
  return (
    <div className="scroll-smooth overflow-x-hiddens overflow-y-scroll scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 h-screen snap-y snap-mandatory">
      <Navbar />

      {/* <hr /> */}

      <MainPage />

      {/* <hr /> */}

      <TopNft />

      <CreatOwnNft />

      <h1 className="text-3xl">🎩 Nft Creator</h1>
      <h1 className="text-3xl">Join Community</h1>
      <h1 className="text-3xl">footer</h1>
    </div>
  );
};

export default LandingPage;
