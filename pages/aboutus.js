import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import styled from 'styled-components';


const MainCont = styled.div`
    
`;

const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;

    .groupIcon {
        margin-top: 100px;
        width: 100px;
        height: 100px;
    }

    .content {
        margin: 0px;
        padding: 0px;
        margin-left: 50px;
        margin-right: 50px;
    }
`;


const Title = styled.h3`
    text-align: center;
`;
export default function AboutUs({

}) {
    return <MainCont>
        <Head>
            <title>About Us</title>
        </Head>

        <Header />

        <ContentCont>

            <Title>
                <h2>About our team</h2>
            </Title>
            <div className="content">
                <h4>Lead Developer: Rakhymzhan Duisek</h4>
                <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
                <h4>Developer: Amelie Panja</h4>
                <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
                <h4>Graphic Designer: Lance Bulseco</h4>
                <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
                <h4>Graphic Designer/Developer Junn Nguyen</h4>
                <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
            </div>
        </ContentCont>

        <Lowernav />
    </MainCont>
}