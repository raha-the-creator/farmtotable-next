import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 18px;
`;

const CardsCont = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    .card2 {
        background-color: white;
        border: 0.25px solid black;
        border-radius: 8px;
        margin-left: 56px;
        padding: 0px;
    }

    .card3 {
        background-color: white;
        border: 0.25px solid black;
        border-radius: 8px;
        margin-left: 10px;
        padding: 0px;
    }
    
    .card4 {
        background-color: white;
        border: 0.25px solid black;
        border-radius: 8px;
        margin-left: 10px;
        padding: 0px;
    }

    #card2text {
        padding: 0px;
        color: red;
        margin: 10px;
        padding: 0px;
        font-size: 14px;
        font-weight: bold;
        color: #818385;
        font-family: 'Montserrat', sans-serif;
    }

    #card3text {
        padding: 0px;
        color: red;
        margin: 10px;
        padding: 0px;
        font-size: 14px;
        font-weight: bold;
        color: #818385;
        font-family: 'Montserrat', sans-serif;
    }
    
    #card4text {
        padding: 0px;
        color: red;
        margin: 10px;
        padding: 0px;
        font-size: 14px;
        font-weight: bold;
        color: #818385;
        font-family: 'Montserrat', sans-serif;
    }
`;

const Card = styled.div`
    background-color: ${props=>props.color};
    position: absolute;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
`;

const CardText = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    color: white;
    font-family: 'Montserrat', sans-serif;
`;

const RecentArticlesCard = ({
    title="Read recent articles",
    color="#5A7961",
    text="All"
}) => {
    return <Container>
        <Title>
            {title}
        </Title>
        <CardsCont>
            <Card color={color}>
                <CardText>
                    {text}
                </CardText>
            </Card>
            <div className="card2">
                <p id="card2text">Plants</p>
            </div>
            <div className="card3">
                <p id="card3text">Veggies</p>
            </div>
            <div className="card4">
                <p id="card4text">How to: 101</p>
            </div>
        </CardsCont>
    </Container>
}

export default RecentArticlesCard;