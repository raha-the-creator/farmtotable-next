import React from 'react';
import styled from 'styled-components';
import {useRouter, userouter} from 'next/router'
import Image from 'next/image'

import StarIcon from '../StarRate'
import HeartIcon from '../HeartIcon';

const PickCont = styled.div `
    z-index: -1;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #E5EFD7;
    color: black;
    border: 2px solid black;
    border-radius: 13px;
    width: 150px;
    height: 150px;
    margin: 15px;

    .hearts {
        display: flex;
        flex-direction: row;
    }

    .stars {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        margin-left: 10px;
        color: #f7cf1b;
    }

    #img {
        width: 80px;
        margin-left: 10px;
    }

    #imgs {
        display: flex;
        flex-direction: row;
    }
`

const TextCont = styled.div `
    display: flex;
    justify-content: flex-start;
    margin-left: 8px;
`

const BottomItemsCont = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 5px;
`

const Paragraph = styled.p `

`

const TinyHeader = styled.h4 `
    margin-right: 10px;
`

const Poppicks = ({
    text1="Organic Red Apples",
    text2="$25",
    heartcolor="#fc0303"
}) =>{

    const router = useRouter()
    return <PickCont>
        <div id="imgs">
            <div className="hearts">
                <HeartIcon heartcolor="red" />
            </div>

            <div id="img">
            <Image 
                alt="apple icon"
                src="/appleicon.png"
                layout="responsive"
                quality={25}
                width={22}
                height={20}
            />
            </div>
        </div>

            <TextCont>
                {text1}
            </TextCont>

            <BottomItemsCont>
                <div className="stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <TinyHeader>
                    {text2}
                </TinyHeader>
            </BottomItemsCont>
    </PickCont>
}

export default Poppicks;
