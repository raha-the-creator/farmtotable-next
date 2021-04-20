import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import styled from 'styled-components';
import React, {useState} from 'react';
import Textbox from '../comps/Textbox';

const HomeCont = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

const HeaderTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-family: 'Montserrat', serif;
`;

const Images = styled.div`
width: "500px"
height: "500px"
`;


export default function Home({
}) {
  return <HomeCont>
    <Head>
      <title>Article</title>
    </Head>
    <Header />
    <HeaderTitle>
    </HeaderTitle>
    <div className="content">
     <Images>
         <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/1/0/7/2097015-1-eng-GB/Why-do-people-buy-organic-Separating-myth-from-motivation.jpg" style={{
           width: "400px",
           height: "400px",
           }}>

           </img>
     </Images>

     <Textbox>
         
     </Textbox>
    </div>
    <Lowernav />
  </HomeCont>
}