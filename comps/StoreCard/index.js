import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
    margin-left:${props=>props.left}px;
    transition: left 1s;
    margin: 15px;
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
    background-color:${props=>props.storecolor};
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

const StoreCardDistCont = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    margin-right: 10px;
`;

const StoreDistance = styled.p`
    font-family: Montserrat, sans-serif;
    font-size: 17px;
    font-weight: 550;
`;

const StoreCard = ({
    StoreName="Real Canadian Farmers",
    Delivery="Delivery",
    left=10,
    storecolor="#fcba03",
    distance="10km"
}) => {
    const router = useRouter();
    return <StoreCardCont left={left} onClick={()=>router.push("/store")}>
        <StoreCardImgCont>
            <StoreCardImg storecolor={storecolor}></StoreCardImg>
        </StoreCardImgCont>
        <StoreCardInfoCont>
            <StoreCardName>{StoreName}</StoreCardName>
            <StoreCardDelivery>{Delivery}</StoreCardDelivery>
        </StoreCardInfoCont>
        <StoreCardDistCont>
            <StoreDistance>{distance}</StoreDistance>
        </StoreCardDistCont>
    </StoreCardCont>
}

export default StoreCard;