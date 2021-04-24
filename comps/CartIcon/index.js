import React from 'react';
import styled from 'styled-components';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const CartCont = styled.div `
    display: flex;
    justify-content: flex-end;
    

    .img {
        width: 40px ;
        height: 40px ;
        color: ${props=>props.cartcolor};
        
    }

`


const CartIcon = ({
    cartcolor="white",
    height= 52,
    width= 52,
    
}) => {
    return <CartCont>
        <AiOutlineShoppingCart className="img" color={cartcolor} />
    </CartCont>
}

export default CartIcon