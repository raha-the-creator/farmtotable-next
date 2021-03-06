import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import SearchBar from '../comps/SearchBar';
import Poppicks from '../comps/Poppicks';
import StoreHead from '../comps/StoreHead';
import ArticleComp from '../comps/ArticleComp';
// import styles from '../styles/globals.css';

const HomeCont = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .items {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
`;

const StoreHeadCont = styled.div`
`;

const HeaderTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', serif;
`;

const GoogleMap = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  border: 1px solid black;
`;

const PopularPicksText = styled.p`
  font-size: 20px;
`;

export default function Home({
  header="Farms next to you!",
  PopularPicks="Popular Picks",
}) {
  return <HomeCont>
    <Head>
      <title>Popular Items!</title>
    </Head>
    <Header />
    <div className="content">
      <SearchBar />

      <HeaderTitle>
        {header}
      </HeaderTitle>
      <SearchBar />

      <PopularPicksText>
        {PopularPicks}
      </PopularPicksText>

      <div className="items">
        <Poppicks />
        <Poppicks />
      </div>
      <div className="items">
        <Poppicks />
        <Poppicks />
      </div>
      <ArticleComp />
    </div>
    <Lowernav />
  </HomeCont>
}
