import React from 'react';
import Banner from '../Banner';
import Card from '../Card';
import Card2 from '../Card2';
import Card3 from '../Card3';
import Question from '../Question';
import Client from '../Client.jsx'; 
import Price from '../Price';
import Gain from '../Gain';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Card2 />
      <Card3 />
      <Question />
      <Client />
      <Gain />
      <Price />
      <div className="min-h-screen flex flex-col justify-between">
      <div className="flex justify-center space-x-4 mb-6 text-sm">
        <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
        <Link to="/terms-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
        <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
        <Link to="/refund-cancellation" className="text-gray-400 hover:text-white">Refund & Cancellation</Link>
      </div>
    </div>
    </>
  );
};

export default Home;