import React from 'react';
import styled from 'styled-components';
import CartIcon from '../CartIcon';
import {useRouter} from 'next/router';

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
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #B6D49E;
    border-radius: 30% 30% 30%;
    margin-top 40px;
    width: 60px;
    height: 60px;
    margin-right: 20px;
    
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
    const router = useRouter();
    return <HeaderCont>
        <HeaderTopCont>
            <HeaderTopMenuImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></HeaderTopMenuImg>
            <HeaderTopProfImg src="https://placekitten.com/100/100"></HeaderTopProfImg>
            <HeaderTopCartCont onClick={()=>router.push("/checkout")}>
            <CartIcon/>
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