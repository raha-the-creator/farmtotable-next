import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StoreHeadCont = styled.div`
    #img {
        margin-top: -10px;
        margin-bottom: 40px;
        z-index: 0;
        width: 480px;
        height: 450px;
    }
`;

const StoreInfo = styled.div`

`;

const StoreHead = ({}) => {
    return <StoreHeadCont>
        <div id="img">
            <Image
                src="/apple.jpg"
                alt="apple12"
                layout="responsive"
                width={1000}px
                height={1000}px
                quality={30}
            />
        </div>
        <StoreInfo>
            <p>Store name</p>
        </StoreInfo>
    </StoreHeadCont>
}

export default StoreHead;