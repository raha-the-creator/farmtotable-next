import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import styled from 'styled-components';
import React, {useState} from 'react';
import Confirmation from '../comps/Confirmation';
import BackMenu from '../comps/BackMenu';
import {useRouter} from 'next/router';

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

const Paragraph = styled.h2`
margin-top:50px;
`;

const Sentence = styled.h3`
display:flex;
justify-content:center;
align-items:center;
`;



export default function Home({
}) {
  return <HomeCont>
    <Head>
      <title>Confirmation</title>
    </Head>
   
    <div className="content">
    <Confirmation></Confirmation>
    <Paragraph>Payment Confirmation</Paragraph>
    <Sentence>Your payment was made successfully! 
        A receipt has been sent to your email.
    </Sentence>
    <BackMenu></BackMenu>
    </div>
    <Lowernav />
  </HomeCont>
}