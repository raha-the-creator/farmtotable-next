import React from 'react';
import styled from 'styled-components';

const CheckoutCont = styled.div`
    background-color: #e8e8e8;
    height:100px;
    width:33%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    border-radius: 15px;
    border: 1.5px solid black;
`;

const CheckoutProductImgCont = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:20px;
  color: ${props=>props.color};
`;

const CheckoutProductImg = styled.img`
  height:50px;
  width:50px;
  margin-left: 25px;
  src="https://placekitten.com/100/100";
`;

const CheckoutProductInfoCont = styled.div`
  display:flex;
  flex-direction: row; 
  margin-right:20px;
`;

const CheckoutProductName = styled.h4`

`;

const CheckoutProductWeight = styled.p`
  line-height:0;
  font:roboto;
  margin-top: 50px;
`;

const CheckoutProductRemove = styled.p`
  font:roboto;
  font-weight: bold;
  margin-left: 20px;
  font-family: sans-serif;
  color: white;
  background-color: green;
  margin-top: 60px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckoutProductAmountCont = styled.div`
    background-color: #fff;
    border: 1px solid black;
    border-radius: 10px;
    min-width: 30px;
    height: 30px;
    margin-top: 40px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CheckoutProductAmount = styled.p`
    
`;

const CheckoutProductPrice = styled.p`
    margin:20px;
    font-weight: bold;
    margin-top: 45px;
`;

const Checkout = ({
    text="Organic Green Apples",
    weight="2.0kg",
    remove="REMOVE",
    amount="1",
    price="$25"
}) => {
    return <CheckoutCont>
        <CheckoutProductImgCont>
            <CheckoutProductImg src="https://purepng.com/public/uploads/large/purepng.com-green-applesapplehealthycutapples-641522015628mmviv.png">

            </CheckoutProductImg>
        </CheckoutProductImgCont>
        <CheckoutProductInfoCont>
            <CheckoutProductName>
                {text}
            </CheckoutProductName>

            <CheckoutProductWeight>
                {weight}
            </CheckoutProductWeight>

            <CheckoutProductRemove>
                {remove}
            </CheckoutProductRemove>

            <CheckoutProductAmountCont>
                <CheckoutProductAmount>
                    {amount}
                </CheckoutProductAmount>
            </CheckoutProductAmountCont>
            
            <CheckoutProductPrice>
                {price}
            </CheckoutProductPrice>
        </CheckoutProductInfoCont>
    </CheckoutCont>
}

export default Checkout;