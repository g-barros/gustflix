import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/menu';
import BannerMain from '../../components/bannerMain';
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';
import dadosIniciais from '../../data/dados_iniciais.json';

const HomeWrapper = styled.div`
    background: var(--grayDark);
`;

function Home() {
    return (
        <HomeWrapper>
            <Menu />
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                videoDescription="KOWASHITAI"
                url={dadosIniciais.categorias[0].videos[0].url}
            />
            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />
            <Carousel
                category={dadosIniciais.categorias[1]}
            />
            <Carousel
                category={dadosIniciais.categorias[2]}
            />
            <Carousel
                category={dadosIniciais.categorias[3]}
            />
            <Carousel
                category={dadosIniciais.categorias[4]}
            />
            <Carousel
                category={dadosIniciais.categorias[5]}
            />
            <Footer />
        </HomeWrapper>
    );
}

export default Home;