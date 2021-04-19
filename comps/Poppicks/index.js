import React from 'react';
import styled from 'styled-components';
import {useRouter, userouter} from 'next/router'
import Image from 'next/image'

import StarIcon from '../StarRate'
import HeartIcon from '../HeartIcon';

const PickCont = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #E5EFD7;
    color: black;
    border: 2px solid black;
    border-radius: 103px;


`

const TextCont = styled.div `
    display: flex;
    justify-content: flex-start;

`

const BottomItemsCont = styled.div `
    display: flex;
    justify-content: space-between;

`

const Paragraph = styled.p `
    

`

const TinyHeader = styled.h6 `


`

const Poppicks = ({
    text1="Organic Red Apples",
    text2="$25",

}) =>{

    const router = useRouter()
    return <PickCont>
        <HeartIcon heartcolor="#DB222A" />
        <Image 
            alt="apple icon"
            src="/appleicon.png"
            layout="responsive"
            quality={25}
            width={100}
            height={100}
        />
        <TextCont>
            <Paragraph text={text1} />
        </TextCont>
        <BottomItemsCont>
            <StarIcon starcolor="#FFD700" />
            <TinyHeader text={text2} />
        </BottomItemsCont>
    </PickCont>
}

export default Poppicks
