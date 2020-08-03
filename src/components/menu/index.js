import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/gustflix-logo.png';
import { MenuWrapper, LogoImage, ButtonLink } from './style.js';
import './menu.css';

function Menu() {
    return (
        <MenuWrapper className="menu">
            <Link to="/">
                <LogoImage src={logo} alt="GustFlix" />
            </Link>
            <ButtonLink as={Link} className="buttonLink" to="/cadastro/video">Novo vídeo</ButtonLink>
        </MenuWrapper>
    )
}

export default Menu;