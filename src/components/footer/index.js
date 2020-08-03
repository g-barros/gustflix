import React from 'react';
import logo from '../../assets/img/gustflix-logo.png';
import { FooterBase } from './styles';

function Footer() {
    return (
        <FooterBase>
            <a href="https://www.netflix.com/">
                <img src={logo} alt="GustFlix" className="logo" />
            </a>
            <p>
                Orgulhosamente criado durante a
                {' '}
                <a href="https://www.alura.com.br/">
                    Imersão React da Alura
                </a>
            </p>
        </FooterBase>
    );
}

export default Footer;