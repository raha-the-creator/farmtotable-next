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
`;

export default function AboutUs({

}) {
    return <MainCont>
        <Head>
            <title>About Us</title>
        </Head>

        <Header />

        <ContentCont>
           <h3>About our team</h3>
           <h4>Lead Developer: Rakhymzhan Duisek</h4>
           <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
           <h4>Developer: Amelie Panja</h4>
           <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
           <h4>Graphic Designer: Lance Bulseco</h4>
           <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
           <h4>Graphic Designer/Developer Junn Nguyen</h4>
           <p>Lorem ipsum fkabfkjdsn kldfaklj jha fdskljf asdjlf</p>
        </ContentCont>

        <Lowernav />
    </MainCont>
}