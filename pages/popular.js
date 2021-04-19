import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import SearchBar from '../comps/SearchBar';
import Poppicks from '../comps/Poppicks';
// import styles from '../styles/globals.css';

const HomeCont = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`;

const HeaderTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-family: 'Montserrat', serif;
`;

const GoogleMap = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  border: 1px solid black;
`;

export default function Home({
  header="Farms next to you!",
  PopularPicks="Popular Picks"
}) {
  return <HomeCont>
    <Head>
      <title>Popular Items</title>
    </Head>
    <Header />
    <div className="content">
      <HeaderTitle>
        {header}
      </HeaderTitle>
      <SearchBar />
      <Poppicks>
        {PopularPicks}
      </Poppicks>
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </div>
    <Lowernav />
  </HomeCont>
}
