import Head from 'next/head';
import styled from 'styled-components';
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import {useRouter} from 'next/router';
import ReadRecipe from '../comps/ReadRecipe';

const MainCont = styled.div`

`;

const Content = styled.div`
    display: flex;
    flex-direction: column;

    .top {
        margin-top: 120px;
    }

    .bot {
        display: flex;
        align-items: center;
        z-index: -1;
        width: 100%;
        margin-left: 40px;
        margin-top: 30px;
    }
`;

const ImageBox = styled.div`
    min-height: 400px;
    min-width: 300px;
    background-size: cover;
    background-image: url(${props=>props.url})
`;

export default function Support({
    url="https://www.jessicagavin.com/wp-content/uploads/2013/09/baked-apple-chips-7-1200.jpg"
}) {
    const router = useRouter();
    return <MainCont>
        <Head>
            <title>Supporting</title>
        </Head>
        <Header />

        <Content>
            <div className="top">
                <ImageBox url={url}>

                </ImageBox>
            </div>

            <div className="bot">
                <ReadRecipe />
            </div>
        </Content>

        <Lowernav />
    </MainCont>
}