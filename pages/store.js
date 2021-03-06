import Head from 'next/head'
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import StoreCard from '../comps/StoreCard';
import styled from 'styled-components';
import SearchBar from '../comps/SearchBar';
import Poppicks from '../comps/Poppicks';
import PoppicksNew from '../comps/PoppicksNew';
import StoreHead from '../comps/StoreHead';
// import styles from '../styles/globals.css';

const HomeCont = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }

  .items {
    display: flex;
    flex-direction: row;
    margin: 10px;
    margin-top: 250px;
    margin-bottom: 240px;
  }

  .products {
    marging-bottom: 20px;
  }

  #top {
    margin-top: 0px;
  }

  #bot {
    margin-bottom: 20px;
  }

  #item1{
    margin-left: 10px;
  }

  #item2{
    margin-left: -200px;
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
  PopularPicks="Popular Picks at this Store",
}) {
  return <HomeCont>
    <Head>
      <title>Store</title>
    </Head>
    <Header />
    <div className="content">
      <SearchBar />

      <HeaderTitle>
        {header}
      </HeaderTitle>
      <StoreHead />
      <SearchBar />

      <PopularPicksText>
        {PopularPicks}
      </PopularPicksText>

    <div className="products">
        <div className="items" id="top">
          <div id="item1">
            <PoppicksNew />
          </div>
          <div id="item2">
            <PoppicksNew />
          </div>
        </div>
        <div className="items">
          <div id="item1">
            <PoppicksNew />
          </div>
          <div id="item2">
            <PoppicksNew />
          </div>
        </div>
        <div className="items">
          <div id="item1">
            <PoppicksNew />
          </div>
          <div id="item2">
            <PoppicksNew />
          </div>
        </div>
    </div>
      
      
    </div>
    <Lowernav />
  </HomeCont>
}
