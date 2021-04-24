import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {AiOutlineClockCircle} from 'react-icons/ai';

const StoreHeadCont = styled.div`
    margin: 0px;
    padding: 0px;
`;

const StoreHeadDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    background-image: linear-gradient(to bottom, rgba(2, 38, 2, 0.1), rgba(0, 0, 0, 0.73)), 
    url(${props=>props.url});
    background-size: cover;
    width: 500px;
    height: 350px;

    .icon {        
        color: ${props=>props.cartColor};
        width: 40px;
        height: 40px;
    }
`;

const StoreName = styled.p`
    display: flex;
    justify-content: center;
    margin: 0px;
    padding-top: 60px;
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 30px;
`;

const StoreDelivery = styled.p`
    display: flex;
    justify-content: center;
    margin: 0px;
    padding-top: 10px;
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 18px;
`;

const StoreImg = styled.div`
    display: flex;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #8EAEAC;
    margin-top: 20px;
`;

const StoreTime = styled.div`
    display: flex;
    align-items: center;
`;

const StoreDeliveryTiming = styled.p`
    display: flex;
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-left: 13px;
`;

const StoreHead = ({
    url="https://media3.s-nbcnews.com/i/newscms/2019_37/1479820/apples-today-main-190909_e0352db16b83bc7c23a0cfea723570c7.jpg",
    name="John's Apples",
    delivery="V5G 4J3",
    cartColor="white",
    deliveryTime="Within 30 minutues"
}) => {
    return <StoreHeadCont>
        <StoreHeadDiv url={url}>
            <StoreName>{name}</StoreName>
            <StoreDelivery>Deliver to {delivery}</StoreDelivery>
            <StoreImg />
            <StoreTime>
                <AiOutlineClockCircle className="icon" color={cartColor}/>
                <StoreDeliveryTiming>{deliveryTime}</StoreDeliveryTiming>
            </StoreTime>
        </StoreHeadDiv>
    </StoreHeadCont>
}

export default StoreHead;


{/* <div id="img">
    <Image
        src="/apple.jpg"
        alt="apple12"
        layout="responsive"
        width={1000}px
        height={1000}px
        quality={30}
    />
</div>
<StoreInfo>
    <p>Store name</p>
</StoreInfo> */}