import React from 'react';
import Banner from '../Banner';
import Card from '../Card';
import Card2 from '../Card2';
import Card3 from '../Card3';
import Question from '../Question';
import Client from '../Client';
import Price from '../Price';
import Gain from '../Gain';


const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Card2 />
      <Card3 />
      <Question />
      <Client />
      <Gain/>
      <Price/>
    </>
  );
};

export default Home;