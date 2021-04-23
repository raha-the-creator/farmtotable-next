import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import React, {useState} from 'react';
import Checkout from '../comps/Checkout';
import {useRouter} from 'next/router';

import ImageButton from '../comps/ImageButton';

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


export default function Home() {
  const [cardstate, setCardState] = useState(false);

  var left = 10;
  if(cardstate === true){
    left = 100;
    console.log("do stuff")
  }
  console.log("cardstate", cardstate);
  const router = useRouter();
  return <HomeCont>
    <Head>
      <title>Checkout Page</title>
    </Head>
    <Header></Header>
    <HeaderTitle>
     <h1>Recipes</h1>
    </HeaderTitle>
    
    <div className="content">

    <br></br>
    <div onClick={()=>router.push("/recipe1")}>
      <ImageButton text={"Apples & Ice cream"} url= {"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190724-air-fryer-blooming-apples-0337-landscape-pf-1564770188.png?crop=0.668xw:1.00xh;0.0867xw,0&resize=480:*"}></ImageButton>
    </div>
    <br></br>
    <ImageButton text={"Carmel Apples"} url= {"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-pie-bars-1536693077.png?crop=1.00xw:0.752xh;0,0.168xh&resize=1200:*"}></ImageButton>
    <br></br>
    <ImageButton text={"Carmel Apples"} url= {"https://www.forksoverknives.com/wp-content/uploads/vegan-apple-recipes-cover-image.jpg"}></ImageButton>
    </div>
    <Lowernav />
  </HomeCont>
}
