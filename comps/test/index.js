import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Cont = styled.div`
    min-width: 300px;
    min-height: 360px;
    border: 1px solid black;
    border-radius: 24px;

    .bckimg {
        background-image: url("/articlepreview.png");
    }
`;

const ImgBack = styled.img`
    width: 300px;
    height: 360px;
    object-fit: cover;
    border-radius: 24px;
    z-index: -1;
    margin: 0px;
    padding: 0px;
`;

const Content = styled.div`
    color: red;
`;

const TestUI = ({
    url="/articlepreview.png"
}) => {
    return <Cont>
        <div className="bckimg">

        </div>
        <ImgBack src="/articlepreview.png" />
        <Content>
            123123
        </Content>
    </Cont>
}

export default TestUI;