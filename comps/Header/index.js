import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #545454;
    width: 490px;
    height: 130px;
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
    justify-content: space-between;
    align-items: center;
`;

const HeaderTopMenuImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 25px;
    margin-top: 30px;
    filter: brightness(0) invert(1);
`;

const HeaderTopProfImg = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50%;
    border: 3px solid white;
`;

const HeaderTopCartCont = styled.div`
    background-color: #B6D49E;
`;

const HeaderTopCartImg = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-right: 25px;
    filter: brightness(0) invert(1);
    border-radius: 40%;
    border: 3px solid #52E74F;
    padding: 5px;
`;

const HeaderBotCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0px;
    padding: 0px;
`;

const HeaderBotUserText = styled.p`
    display: flex;
    line-height: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: white;
    justify-content: center;
    margin-top: 15px;
`;

const HeaderBotDeliverText = styled.p`
    line-height: 10px;
    font-family: 'Montserrat', sans-serif;
    color: #52E74F;
    margin-top: 3px;
    margin-bottom: 5px;
`;

const Header = ({
    userName="user",
    address="Willingdon Ave"
}) => {
    return <HeaderCont>
        <HeaderTopCont>
            <HeaderTopMenuImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></HeaderTopMenuImg>
            <HeaderTopProfImg src="https://placekitten.com/100/100"></HeaderTopProfImg>
            <HeaderTopCartCont>
                <HeaderTopCartImg src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"></HeaderTopCartImg>
            </HeaderTopCartCont>
        </HeaderTopCont>

        <HeaderBotCont>
            <HeaderBotUserText>
                Hello {userName}!
            </HeaderBotUserText>
            <HeaderBotDeliverText>
                Deliver to: {address}
            </HeaderBotDeliverText>
        </HeaderBotCont>
    </HeaderCont>
}

export default Header;