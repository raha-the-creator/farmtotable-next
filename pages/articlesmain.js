import Head from 'next/head';
import styled from 'styled-components';
import Header from '../comps/Header';
import Lowernav from '../comps/Lowernav';
import ImageButton from '../comps/ImageButton';
import RecentArticlesCard from '../comps/RecentArticlesCard';
import TestUI from '../comps/test';
import {useRouter} from 'next/router';

const MainCont = styled.div`

`;

const Content = styled.div`

`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;

    #section1title {
        font-family: 'Montserrat', serif;
        font-size: 58px;
        margin: 0px;
    }

    #section1cont {
        font-family: 'Montserrat', serif;
        margin-left: -100px;
        font-size: 21px;
    }
`;

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;

    #section2title {
        font-size: 36px;
    }
`;

const Section3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

export default function ArticlesMain({

}) {
    const router = useRouter();
    return <MainCont>
        <Head>
            <title>Main Articles Page</title>
        </Head>
        <Header />
        <Content>
            <Section1>
                <h2 id="section1title">Articles</h2>
                <h3 id="section1cont">Continue reading...</h3>
                <div onClick={()=>router.push("/article")}>
                    <ImageButton />
                </div>
            </Section1>
            
            <Section2>
                <h2 id="section2title">Categories</h2>
                <div onClick={()=>router.push("/recipes")}>
                    <ImageButton url="/recipes" text="Recipes" url="https://cdn.loveandlemons.com/wp-content/uploads/2019/07/best-grilled-vegetables-500x375.jpg"/>
                </div>

                <div onClick={()=>router.push("/supporting")}>
                    <ImageButton text="Supporting local farms" url="https://live.staticflickr.com/65535/50881797506_176f3d534f_z.jpg"/>
                </div>

                <ImageButton text="Choosing veggies and fruits" url="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg"/>
                <ImageButton text="Our mission" url="https://news.virginia.edu/sites/default/files/article_image/plants_header.jpg"/>
            </Section2>

            <Section3>
                <RecentArticlesCard />
                <TestUI />
            </Section3>
        </Content>
        <Lowernav />
    </MainCont>
}