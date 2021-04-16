import React from 'react';
import styled from 'styled-components';



const OrderCont = styled.div`
    background-color:#7BC67B;
    border-radius: 20px 20px 20px 20px;
    min-height:50px;
    min-width:300px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
`;

const OrderPlace = styled.p`
    font-size:18px;
    font-weight:bold;
    font-family: san-serif;
    color:white;
`;



const Order = ({
    word="Place Order",
    
}) => {
    return <OrderCont>
        <OrderPlace>
            {word}
            
        </OrderPlace>
    </OrderCont>
}




export default Order;