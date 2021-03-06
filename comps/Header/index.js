import React from 'react';
import styled from 'styled-components';
import CartIcon from '../CartIcon';
import {useRouter} from 'next/router';
import Logo from '../Logo';

const HeaderCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #5A7961;
    width: 500px;
    height: 130px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
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
    //made hamgurger menu transparent
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

const HeaderTopLogoCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #B6D49E;
    border-radius: 30% 30% 30%;
    margin-top 40px;
    width: 60px;
    height: 60px;
    margin-right: 20px;
    opacity: 0;
    //made it transparent
`;

const Header = ({
    userName="user",
    address="Willingdon Ave"
}) => {
    const router = useRouter();
    return <HeaderCont>
        <HeaderTopCont>
            <HeaderTopLogoCont>
                {/* <Logo /> */}
                {/* <HeaderTopMenuImg href="/logo.png"></HeaderTopMenuImg> */}
            </HeaderTopLogoCont>
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