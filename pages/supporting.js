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
     <h1>Supporting</h1>
    </HeaderTitle>
    
    <div className="content">

    <br></br>
    <div onClick={()=>router.push("/recipe1")}>
      <ImageButton text={"Why you should support local farms"} url= {"https://www.foodstoragemoms.com/wp-content/uploads/2020/06/Why-You-Should-Support-Your-Local-Farmers-Market-2.jpg"}></ImageButton>
    </div>
    <br></br>
    <ImageButton text={"How to reduce your carbon footprint"} url= {"https://millionmilesecrets.com/wp-content/uploads/shutterstock_1249749199.jpg"}></ImageButton>
    <br></br>
    <ImageButton text={"Pros and cons of using paper bags"} url= {"https://images-na.ssl-images-amazon.com/images/I/61dLd5GQaNL._AC_SL1500_.jpg"}></ImageButton>
    </div>
    <Lowernav />
  </HomeCont>
}
