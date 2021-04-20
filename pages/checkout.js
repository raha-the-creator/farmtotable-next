import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import React, {useState} from 'react';
import Checkout from '../comps/Checkout';
import Order from '../comps/Order';
import CheckoutHeader from '../comps/CheckoutHeader';

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
  return <HomeCont>
    <Head>
      <title>Checkout Page</title>
    </Head>
    <CheckoutHeader></CheckoutHeader>
    <HeaderTitle>
     
    </HeaderTitle>
    
    <StoreCard
    StoreName="John's Apples"
    Delivery="Delivery: In 30 minutes"
    left = "30"
   ></StoreCard>
    <div className="content">

    <br></br>
<Checkout></Checkout>
    <br></br>
<Checkout></Checkout>
    <br></br>
<Checkout></Checkout>
    <br></br>
<Checkout></Checkout>
    <br></br>
<Checkout></Checkout>
    <br></br>
<Order></Order>
    </div>
    <Lowernav />
  </HomeCont>
}

