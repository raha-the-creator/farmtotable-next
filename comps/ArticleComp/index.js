import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const UserInput = styled.div`
    background-color:#E5EFD7;
    border-radius: 10px;
    height:360px;
    width:450px;
    display:inline-flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    box-shadow: 1px 1px 2px 1px #888888;

    
`;

const UserImg= styled.img`
background-image: url("https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/1/0/7/2097015-1-eng-GB/Why-do-people-buy-organic-Separating-myth-from-motivation.jpg");
min-width: 400px;
min-height: 260px;
margin: 2px";
display:flex;
align-items:center;
justify-content:center;
border: 2px solid black;
border-radius: 103px;
`;

const UserFont = styled.p `
    font-size:35px;
    font-weight:650px;
    font-family: Montserrat;
    color:#545454;
    letter-spacing: 1px;
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

const ArticleComp = () => {
    const router = useRouter();
    return <div onClick={()=>router.push("/article")}>
        <UserInput>
        <UserImg></UserImg>
        <UserFont>Should you go organic?</UserFont>
        </UserInput>
    </div>
}

export default ArticleComp;