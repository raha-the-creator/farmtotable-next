import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

const StarCont = styled.div `
    display: flex;
    justify-content: flex-end;

    .img {
        width: 17px;
        height: 17px;
        color: #f7cf1b;
    }
`




const StarIcon = () => {
    return <StarCont>
        <AiFillStar className="img" />
    </StarCont>
}

export default StarIcon