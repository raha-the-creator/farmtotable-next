import React from 'react';
import styled from 'styled-components';

const LowernavCont = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #d1cfcb;
    width: 490px;
    justify-content: center;
    align-items: center;
`;

const LowernavHomeCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 20px;
`;

const LowernavHomeImg = styled.img`
    width: 50px;
    height: 50px;
`;

const LowernavHomeText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`;

const LowernavNearbyCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 20px;
`;

const LowernavNearbyImg = styled.img`
    width: 50px;
    height: 50px;
`;

const LowernavNearbyText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`;

const LowernavCartCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 20px;
`;

const LowernavCartImg = styled.img`
    width: 50px;
    height: 50px;
`;

const LowernavCartText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`;

const LowernavUserCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 20px;
`;

const LowernavUserImg = styled.img`
    width: 50px;
    height: 50px;
`;

const LowernavUserText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`;

const Lowernav = ({
    home="Home",
    nearby="Near By",
    cart="Cart",
    user="User"
}) => {
    return <LowernavCont>
        <LowernavHomeCont>
            <LowernavHomeImg src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"></LowernavHomeImg>
            <LowernavHomeText>
                {home}
            </LowernavHomeText>
        </LowernavHomeCont>
        <LowernavNearbyCont>
            <LowernavNearbyImg src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/map-pin-marker-circle-512.png"></LowernavNearbyImg>
            <LowernavNearbyText>
                {nearby}
            </LowernavNearbyText>
        </LowernavNearbyCont>
        <LowernavCartCont>
            <LowernavCartImg src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"></LowernavCartImg>
            <LowernavCartText>
                {cart}
            </LowernavCartText>
        </LowernavCartCont>
        <LowernavUserCont>
            <LowernavUserImg src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png"></LowernavUserImg>
            <LowernavUserText>
                {user}
            </LowernavUserText>
        </LowernavUserCont>
    </LowernavCont>
}

export default Lowernav;