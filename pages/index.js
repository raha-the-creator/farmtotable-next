import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import GoogleMap from '../comps/GoogleMap';
import SearchBar from '../comps/SearchBar';
import Poppicks from '../comps/Poppicks';
import {useRouter} from 'next/router';

const MainCont = styled.div`

`;

const ContentCont = styled.div`
    margin-top: 160px;
    margin-bottom: 100px;

    .searchbar {
        margin-left: 80px;
    }

    .popitems {
        display: flex;
        justify-content: center;
        margin: 0px;
    }
`;

const Title = styled.p`
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-top: 15px;
`;

const Stores = styled.div`
    margin-left: 20px;
`;

export default function Main({
    title = "Trending products"
}) {
    const router = useRouter();
    return <MainCont>
        <Head>
            <title>Main Page.</title>
        </Head>
        <Header />

        <ContentCont>
            <div className="searchbar"><SearchBar /></div>
            <Title>{title}</Title>

            <div className="popitems">
                <Poppicks onClick={()=>router.push("/checkout")}/>
                <Poppicks />
                <Poppicks />
            </div>
           
            <Stores>
                <StoreCard StoreName="Super Farmers" Delivery="Delivery in 30 min" storecolor="#03c6fc"/>
                <StoreCard StoreName="Green" Delivery="Delivery in 20 min" storecolor="#7bfc03"/>
                <StoreCard StoreName="Magnum" Delivery="Delivery in 15 min" storecolor="#9003fc"/>
            </Stores>
        </ContentCont>
        
        <Lowernav />
    </MainCont>
}