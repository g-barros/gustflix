import styled from 'styled-components';
import Button from '../button';

export const LogoImage = styled.img`
    max-width: 168px;
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--black);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`
    border: 1px solid var(--white);
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
    .&:hover,
    .&:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        
        border: 0;
        border-radius: 0;
        
        background: var(--primary);
        text-align: center;
    }
`;