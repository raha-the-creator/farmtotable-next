import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Cont = styled.div`

`;

const Logo = ({

}) => {
    return <Cont>
        <Image 
            src='/appleicon.png'
            alt="Logo"
            width={100}
            height={100}
            layout='responsive'
        />
    </Cont>
}

export default Logo;