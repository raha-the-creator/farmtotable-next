import React from 'react';
import styled from 'styled-components';
import {useRouter, userouter} from 'next/router'

import StarIcon from '../StarRate'

const PickCont = styled.div `
    display: flex;
    flex-direction: flex;
    position: relative;


`


const Poppicks = ({


}) =>{

    const router = useRouter()
    return <PickCont>
        <StarIcon />
    </PickCont>
}

export default Poppicks