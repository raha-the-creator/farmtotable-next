import React from 'react';
import styled from 'styled-components';


const TextCont = styled.div`
    background-color:#545454;
    width:300px;
    height:360px;
    border-radius:30px;
    font-family: 'Montserrat', sans-serif;
    color: white;
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
    h2="Header",
    p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis lacus, volutpat congue turpis at, blandit pulvinar est. Donec et gravida massa. Morbi facilisis ant e in tincidunt laoreet. Nunc fermentum lobortis faucibus. Donec ac massa sit amet mi faucibus egestas eget nec dolor. fermentum lobortis faucibus  est. Donec et onsectetu  massa. Morbi "
 }) => {
    return <TextCont>
    <Texth2>
        {h2}
    </Texth2>
    <Textp>{p}</Textp>
    </TextCont>
}


export default Textbox;