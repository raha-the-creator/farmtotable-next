import React from 'react';
import styled from 'styled-components';

const ImageButtonInput = styled.div`
    border-radius: 5%;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    position: relative;
    margin: 5px;
    z-index: -1;
`;

const ImageButtonImg = styled.div`
    border-radius: 5%;
    min-width: 304px;
    min-height: 189px;
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
    align-items: center;
    height: 100%;
    
    padding-left: 30px;
    padding-right: 10px;
    padding-top: 45px;
`


const ImageButton = ({
    text="Should you go organic?",
    url="'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/policy/china-s-tightened-organic-focus-grapes-and-vegetables-top-list-for-mandatory-contaminant-tests/11546195-2-eng-GB/China-s-tightened-organic-focus-Grapes-and-vegetables-top-list-for-mandatory-contaminant-tests_wrbm_large.jpg'"
}) => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",
    

}}>
<ImageButtonInput  >
    <ImageButtonImg url={url}>

    <ImageText>{text}</ImageText>
    </ImageButtonImg>
</ImageButtonInput>
 

</div>
}

export default ImageButton;