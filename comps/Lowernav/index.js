import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const LowernavCont = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #545454;
    width: 490px;
    height: 70px;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
`;

const LowernavHomeCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 5px;
`;

const LowernavHomeImg = styled.img`
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
`;

const LowernavHomeText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    margin-top: 3px;
    color: white;
`;

const LowernavNearbyCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 5px;
`;

const LowernavNearbyImg = styled.img`
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
`;

const LowernavNearbyText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    margin-top: 3px;
    color: white;
`;

const LowernavCartCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 5px;
`;

const LowernavCartImg = styled.img`
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
`;

const LowernavCartText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    margin-top: 3px;
    color: white;
`;

const LowernavUserCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 5px;
`;

const LowernavUserImg = styled.img`
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
`;

const LowernavUserText = styled.p`
    color: black;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    margin-top: 3px;
    color: white;
`;

const Lowernav = ({
    home="Home",
    nearby="Near By",
    cart="Cart",
    user="User",
    routeTo="/popular"
}) => {
    const router = useRouter();
    return <LowernavCont>
        <LowernavHomeCont>
            <LowernavHomeImg src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"></LowernavHomeImg>
            <LowernavHomeText>
                {home}
            </LowernavHomeText>
        </LowernavHomeCont>
        <LowernavNearbyCont onClick={()=>router.push(routeTo)}>
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