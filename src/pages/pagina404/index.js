import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/pageDefault';

function Pagina404() {
    return (
        <PageDefault>
            <h1>Página não encontrada</h1>

            <Link to="/">
                Ir pra Home
            </Link>
            
        </PageDefault>
    )
}

export default Pagina404;