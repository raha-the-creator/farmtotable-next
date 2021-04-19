import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #5A7961;
    width: 490px;
    height: 110px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
`;

const HeaderTopCont = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    align-items: center;
`;

const HeaderTopMenuImg = styled.img`
    width: 80px;
    height: 60px;
    margin-left: 25px;
    margin-top: 10px;
    filter: brightness(0) invert(1);
`;


const HeaderText = styled.p`
    display: flex;
    line-height: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: white;
    justify-content: left;
    

`;


const CheckoutHeader = () => {
    return <HeaderCont>
        <HeaderTopCont>
            <HeaderTopMenuImg src="https://naoussahotel.hotelbranding.gr/wp-content/uploads/2018/03/arrow-left-white-2.png"></HeaderTopMenuImg>
            <HeaderText>Checkout cart</HeaderText>
        </HeaderTopCont>
    </HeaderCont>
}

export default CheckoutHeader;
