import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';


const ImageButtonInput = styled.div`
    border-radius: 5%;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    position: relative;
    margin-top: 20px;
`;

const ImageButtonImg = styled.div`
    border-radius: 5%;
    min-width: 304px;
    min-height: 349px;
    background-image:linear-gradient(to bottom, rgba(2, 38, 2, 0.1), rgba(0, 0, 0, 0.73)),
    url(${props=>props.url});
    background-size: cover;

`

const ImageText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 501;
    font-size: 21px;
    margin: 0px;
    color:white;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: left;
    padding-left: 30px;
    padding-right: 10px;
    padding-top: 45px;
`

const ImageAuthor = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 17px;
    margin: 0px;
    color:white;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: left;
    padding-left: 30px;
    padding-right: 10px;
    padding-top: 135px;
`

const ImageAuthorTitle = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 11px;
    margin: 0px;
    color: #9D9FA0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: left;
    padding-left: 30px;
    padding-right: 10px;
    padding-top: 155px;
`

const Category = styled.div`
    min-width: 30px;
    max-width: 100px;
    height: 30px;
    background-color: #5A7961;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    position: absolute;
    margin-top: 264px;
    margin-left: 30px;
    padding-left: 3px;
    padding-right: 3px;
`

const CategoryText = styled.p`
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 12px;
    padding: 3px;
`

const TestUI = ({
    url="/articlepreview.png",
    text="Reasons to Buy Food from Local Farms",
    author="Dr Mike Chen",
    title="Doctor/Nutritionist"
}) => {
    return <div style={{
        alignItems:"center",
        justifyContent: "center",
    }}>
        <ImageButtonInput>
            <ImageButtonImg url={url}>
                <ImageText>{text}</ImageText>
                <Category>
                    <CategoryText>
                        How to: 101
                    </CategoryText>
                </Category>
                <ImageAuthor>{author}</ImageAuthor>
                <ImageAuthorTitle>{title}</ImageAuthorTitle>
            </ImageButtonImg>
        </ImageButtonInput>
    </div>
}

export default TestUI;