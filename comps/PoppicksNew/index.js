import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import HeartIcon from '../HeartIcon';
import StarIcon from '../StarRate'

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-height: 200px;
    max-height: 240px;
    min-width: 170px;
    max-width: 180px;
    border: 1px solid black;
    border-radius: 20px;
    background-color: #E5EFD7;
    margin: 10px;
`;

const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    flex: 1;
    #product {
        width: 100px;
        height: 100px;
    }

    #icon {
        display: flex;
        top: -60px;
    }
`;
const Row2 = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;

    .subrow {
        display: flex;
        flex-direction: row;
    }

    .stars {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        margin-left: 10px;
        margin-right: 4px;
        color: #f7cf1b;
        background-color: white;
        height: 20px;
        width: 100px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 2px;
    }
`;
const Row3 = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Price = styled.p`
    margin-left: 10px;
    font-family: Montserrat;
    font-weight: bold;
`;

const ProductName = styled.p`
    margin: 0px;
    padding: 0px;
    margin-left: 10px;
    font-family: Montserrat;
`;

const AddButton = styled.button`
    width: 100px;
    height: 38px;
    margin-top: -5px;
    border-radius: 10px;
    font-family: Montserrat;
    background-color: #5A7961;
    color: white;
    font-weight: bold;
`;

const PoppicksNew = ({
    productName="Organic red apples",
    price="$25"
}) => {
    const router = useRouter();
    return <Cont onClick={()=>router.push("/checkout")}>
        <Row1>
            <img id="product" src="/appleicon.png" />
            <HeartIcon id="icon"/>
        </Row1>
        <Row2>
            <ProductName>
                {productName}
            </ProductName>
            <div className="subrow">
                <div className="stars">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <Price>
                    {price}
                </Price>
            </div>
        </Row2>
        <Row3>
            <AddButton>
                Add to Cart
            </AddButton>
        </Row3>
    </Cont>
}

export default PoppicksNew;