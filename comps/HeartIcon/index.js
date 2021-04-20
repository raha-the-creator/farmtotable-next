import React from 'react';
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai'

const HeartCont = styled.div `
    display: flex;
    margin-left: 5px;
    margin-top: 5px;
    

    .img {
        width: 22px;
        height: 22px;
        color: #d94141;
    }

`



const HeartIcon = ({
    
}) => {
    return <HeartCont>
        <AiFillHeart className="img" />
    </HeartCont>
}

export default HeartIcon