import React from 'react';
import styled from 'styled-components';

const StoreCardCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 430px;
    height: 150px;
    background-color: #F0F0F0;
    border-radius: 20px;
    box-shadow: 6px 9px 18px rgba(0, 0, 0, 0.5); 
	-webkit-box-shadow: 6px 9px 18px rgba(0, 0, 0, 0.5); 
	-moz-box-shadow: 6px 9px 18px rgba(0, 0, 0, 0.5); 
    padding: 0px;
    margin: 7px;
    margin-left:${props=>props.left}px;
    transition: left 1s;
`;

const StoreCardImgCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const StoreCardImg = styled.div`
    height: 65px;
    width: 65px;
    margin: 15px;
    border-radius: 10px;
    background-color: #EF6262;
`;

const StoreCardInfoCont = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    justify-content: center;
    margin-left: 15px;
`;

const StoreCardName = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 501;
    font-size: 21px;
    margin: 0px;
    padding: 0px;
`;

const StoreCardDelivery = styled.p`
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    margin: 0px;
    padding: 0px;
    margin-top: 10px;
`;

const StoreCard = ({
    StoreName="Real Canadian Farmers",
    Delivery="Delivery",
    left=10
}) => {
    return <StoreCardCont left={left}>
        <StoreCardImgCont>
            <StoreCardImg></StoreCardImg>
        </StoreCardImgCont>
        <StoreCardInfoCont>
            <StoreCardName>{StoreName}</StoreCardName>
            <StoreCardDelivery>{Delivery}</StoreCardDelivery>
        </StoreCardInfoCont>
    </StoreCardCont>
}

export default StoreCard;