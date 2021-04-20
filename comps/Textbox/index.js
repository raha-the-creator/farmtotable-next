import React from 'react';
import styled from 'styled-components';


const TextCont = styled.div`
    background-color:#FFF;
    width:300px;
    height:360px;
    border-radius:30px;
    font-family: 'Montserrat', sans-serif;
    color: black;
`;

const Texth2= styled.h2`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:20px;
`;

const Textp= styled.p`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:10px;
    padding-bottom: 10px;
    padding: 16px;
    margin:15px;
`;

const Textbox = ({ 
    h2="Should you go organic?",
    p=" Walk through any grocery store today, and you'll likely see more shelf space devoted to organics—foods that are grown without most synthetic fertilizers and pesticides, and animal products that are free of antibiotics and hormones. Demand for organic food is up, with sales reaching $35.9 billion in 2014. I think people believe these foods are better for them, but we really dont know that they are says registered dietitian Kathy McManus, director of the Department of Nutrition at Harvard-affiliated Brigham and Womens Hospital."
 }) => {
    return <TextCont>
    <Texth2>
        {h2}
    </Texth2>
    <Textp>{p}</Textp>
    </TextCont>
}


export default Textbox;