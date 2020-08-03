import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/formField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  function setDadosCategoria(chave, valor) {
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setDadosCategoria(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
      const URL_API = 'http://localhost:8080/categorias';

      fetch(URL_API)
      .then(async (resposta) => {
          const body = await resposta.json();
          setCategorias([
              ...body,
          ])
      })
    //   setTimeout(()=>{
    //       setCategorias([
    //           ...categorias,
    //         {
    //             "id":1,
    //             "nome":"Megami Tensei",
    //             "descricao":"Sempre há uma escolha",
    //             "cor":"#cbd1ff"
    //         },
    //         {
    //             "id":2,
    //             "nome":"Japanese Games",
    //             "descricao":"Sempre há um sol nascente",
    //             "cor":"#cbd1ff"
    //         }
    //       ])
    //   }, 4 * 1000)
  }, [])


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {novaCategoria.nome}
      </h1>

      <form
        style={{ background: novaCategoria.cor }}
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, novaCategoria]);
          setNovaCategoria(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria "
          type="text"
          name="nome"
          value={novaCategoria.nome}
          onChange={(e) => handleChange(e)}
        />
        <FormField
          label="Descrição da Categoria "
          type="textarea"
          name="descricao"
          value={novaCategoria.descricao}
          onChange={(e) => handleChange(e)}
        />
        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={novaCategoria.cor}
          onChange={(e) => handleChange(e)}
        />
        <button>
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 && 
        <div>
            Carregando...
        </div>
      }

      <ul>
        {categorias.map((item, index) => (
          <li key={`${item}${index}`}>
            {item.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir pra Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
