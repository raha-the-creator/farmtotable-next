import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import GoogleMap from '../comps/GoogleMap';

const MainCont = styled.div`

`;

const ContentCont = styled.div`
    margin-top: 160px;
    margin-bottom: 100px;
`;

const Title = styled.p`
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Stores = styled.div`
    margin-left: 20px;
`;

export default function Main({
    title = "Farms next to you!"
}) {
    return <MainCont>
        <Head>
            <title>Main Page</title>
        </Head>
        <Header />

        <ContentCont>
            <Title>{title}</Title>
            <GoogleMap />

            <Stores>
                <StoreCard StoreName="Super Farmers"/>
                <StoreCard />
                <StoreCard />
                <StoreCard />
            </Stores>
        </ContentCont>
        
        <Lowernav />
    </MainCont>
}