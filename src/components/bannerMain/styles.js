import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 5%;
    margin-right: 5%;
    position: relative;
    z-index: 10;
    @media (max-width: 800px) {
        flex-direction: column;
        padding-top: 100px;
    }
`;

ContentAreaContainer.Item = styled.div`
    display: inline-block;
    margin-bottom: 50px;
    width: 50%;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

ContentAreaContainer.Category = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    display: inline-block;
    padding: 25px;
    line-height: 1;
    border-radius: 4px;
    @media (max-width: 800px) {
        display: none;
        font-size: 18px;
        padding: 10px;
    }
`;

ContentAreaContainer.Description = styled.p`
    @media (max-width: 800px) {
        display: none;
    }
`;

ContentAreaContainer.Title = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;
    @media (max-width: 800px) {
        font-size: 32px;
        text-align: center;
    }
`;

export const BannerMainContainer = styled.section`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-position: center;
    background-size: cover;
    color: var(--white);
    height: 80vh;
    position: relative;
    @media (max-width: 800px) {
        height: auto;
        min-height: 50vh;
    }
    &:after,
    &:before {
        content:"";
        display: block;
        height: 20%;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
    }
    &:before {
        top: 0;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    &:after {
        bottom: 0;
        background: linear-gradient(0deg, #141414 0%, transparent 100%);
    }
`;

export const WatchButton = styled.button`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid transparent;
    color: var(--black);
    background: var(--white);
    border-color: var(--black);
    transition: opacity .3s;
    display: none;
    margin: 0 auto;
    @media (max-width: 800px) {
        display: block;
    }
`;