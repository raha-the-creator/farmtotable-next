import React from 'react';
import styled from 'styled-components';



const DeliveryCont = styled.div`
    background-color:#FFFFFF;
    border-radius: 20px 20px 20px 20px;
    height:50%;
    width:24%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    border:1px solid;
    margin:0px;
    padding:0px;
`;

const DeliveryCircle = styled.div`
    background-color:#FF974C;
    width:60px;
    height:50px;
    border-radius:50%;
    display:flex;
    flex-direction:column;
    margin-left:20px;
    
`;

const DeliveryDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-left:25px;   
    margin-right:50px;
`;
const Deliveryh5 = styled.h5`
    display:flex;
    flex-direction:column;
    margin:0px;
    margin-top:20px;
    margin-left:10px;
    margin-right:50px;
`;
const Deliveryp = styled.p`
    display:flex;
    flex-direction:column;
    margin:0px;
    margin-top:5px;
    margin-left:10px;
    margin-right:50px;
`;

const DeliveryArrow = styled.img`
    display:flex;
    flex-direction:column;
    width:60px;
    height:60px;
    margin-top:20px;
    margin-bottom:10px;
`;

const DeliveryX = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:5px;
`;


const Delivery = ({
    h5="Real Canadian Farmers",
    p="Delivery"

}) => {
    return <DeliveryCont>
        <DeliveryCircle></DeliveryCircle>
        <DeliveryDiv>
            <DeliveryX>
                <Deliveryh5>{h5}</Deliveryh5>
                <Deliveryp>{p}</Deliveryp>
            </DeliveryX>
            <DeliveryArrow src= "https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png" />
        </DeliveryDiv>

    </DeliveryCont>
}




export default Delivery;