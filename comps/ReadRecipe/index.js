import React from 'react';
import styled from 'styled-components';

const RecipeInput = styled.div`
    background-color: #FEFBF2;
    border-radius: 5%;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    position: relative;
    box-shadow: 1px 1px 6px 0px #888888;
`;

const RecipeImg = styled.div`
    border-radius: 5%;
    min-width: 414px;
    min-height: 692px;
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1), rgba(215, 187, 157, 0.53));
    background-size: cover;

`

const RecipeText = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 501;
    font-size: 20px;
    margin: 0px;
    color:black;
    display: flex;
    margin-top: 5px;
    align-items: center;
    height: 100%;
    width: 350px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;

`

const RecipeHead = styled.h1`
    font-family: Merriweather;
    margin: 0px;
    color:black;
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 70px;
`


const ReadRecipe = ({
    text1="• Wash ,dry and cut the apples. You can use the cores of the apple as compost.",
    text2="• Mix cinnamon and sugar together in a bowl.",
    text3="• Coat apples in cinnamon and sugar mixture.",
    text4="• Bake in the oven at 360 degrees for ten to fifteen minutes.",
    text5="• Serve with or without ice cream.",
    text6="• Enjoy!",
    header="Apple and Ice Cream"
}) => {

    return <div style={{
        alignItems:"center",
        justifyContent: "center"
        
    
    }}>
    <RecipeInput>
        <RecipeImg>
        <div>
        <RecipeHead>{header}</RecipeHead>
        </div>
        <div>
            <RecipeText>{text1}</RecipeText>
            <RecipeText>{text2}</RecipeText>
            <RecipeText>{text3}</RecipeText>
            <RecipeText>{text4}</RecipeText>
            <RecipeText>{text5}</RecipeText>
            <RecipeText>{text6}</RecipeText>
        </div>
        </RecipeImg>
    </RecipeInput>
     
    
    </div>
    }
    
    export default ReadRecipe;