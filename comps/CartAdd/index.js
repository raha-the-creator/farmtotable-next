import React from 'react';
import styled from 'styled-components';

const CartAddInput = styled.button`
    background-color:#7BC67B;
    color:#FFF;
    border-radius: 8px; 
    border: none;
    min-width:140px;
    min-height:30px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 2px 1px #888888;
`;

const CartAddFont = styled.p `
    font-size:20px;
    font-weight:650;
    font-family: Montserrat;
    color:white;
    letter-spacing: 1px;
`

const CartAdd = () => {

return <div>

<CartAddInput><img src="https://www.pngjoy.com/pngl/553/8409597_backpack-icon-shopping-bag-white-png-transparent-png.png" style={{
    width: "20px",
    height: "20px",
    marginRight: " 10px"
}}></img><CartAddFont>Add</CartAddFont>

</CartAddInput> 

</div>
}

export default CartAdd;
