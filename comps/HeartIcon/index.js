import React from 'react';
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai'

const HeartCont = styled.div `
    display: flex;
    

    .img {
        width: 52px;
        height: 52px;
        color: ${props=>props.heartcolor};
        
    }

`



const HeartIcon = ({
    heartcolor="#fff",
    
}) => {
    return <HeartCont>
        <AiFillHeart className="img" heartcolor={heartcolor} />
    </HeartCont>
}

export default HeartIcon