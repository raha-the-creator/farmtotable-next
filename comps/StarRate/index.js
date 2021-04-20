import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

const StarCont = styled.div `
    display: flex;
    justify-content: flex-end
    

    .img {
        width: 52px;
        height: 52px;
        color: ${props=>props.starcolor};
        
    }

`



const StarIcon = ({
    starcolor="#fff",
    
}) => {
    return <StarCont>
        <AiFillStar className="img" starcolor={starcolor} />
    </StarCont>
}

export default StarIcon