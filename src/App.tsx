import React from 'react';
import './App.css';  // Importar o arquivo CSS

// Tipos para as props dos componentes
interface CabecalhoProps {
  titulo: string;
  descricao: string;
}

interface TituloProps {
  texto: string;
}

interface ParagrafoProps {
  texto: string;
}

interface ImagemProps {
  url: string;
  alt: string;
}

interface ListaItensProps {
  itens: string[];
}

interface BotaoProps {
  texto: string;
  onClick: () => void;
}

interface RodapeProps {
  informacoes: string;
}

// Componente de Cabeçalho
const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, descricao }) => {
  return (
    <header className="cabecalho">
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </header>
  );
};

// Componente de Título
const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return <h1 className="titulo">{texto}</h1>;
};

// Componente de Parágrafo
const Paragrafo: React.FC<ParagrafoProps> = ({ texto }) => {
  return <p className="paragrafo">{texto}</p>;
};

// Componente de Imagem
const Imagem: React.FC<ImagemProps> = ({ url, alt }) => {
  return <img className="imagem" src={url} alt={alt} />;
};

// Componente de Lista de Itens
const ListaItens: React.FC<ListaItensProps> = ({ itens }) => {
  return (
    <ul className="lista-itens">
      {itens.map((item, index) => (
        <li key={index} className="item">{item}</li>
      ))}
    </ul>
  );
};

// Componente de Botão
const Botao: React.FC<BotaoProps> = ({ texto, onClick }) => {
  return <button className="botao" onClick={onClick}>{texto}</button>;
};

// Componente de Rodapé
const Rodape: React.FC<RodapeProps> = ({ informacoes }) => {
  return <footer className="rodape">{informacoes}</footer>;
};

// Componente Principal
const App: React.FC = () => {
  return (
    <div className="app">
      <Cabecalho 
        titulo="Pantera Negra" 
        descricao="O rei de Wakanda e guardião do vibranium." 
      />
      <Titulo texto="Título Principal: A História do Pantera Negra" />
      <Paragrafo 
        texto="T'Challa, conhecido como Pantera Negra, é um super-herói da Marvel, 
        que luta para proteger Wakanda e o mundo com suas habilidades sobre-humanas e 
        inteligência excepcional." 
      />
      <Imagem 
        url="https://hqrock.com.br/wp-content/uploads/2018/02/black-panther-standart-image-full.jpg?w=616" 
        alt="Imagem do Pantera Negra" 
      />
      <ListaItens 
        itens={[
          'Força sobre-humana',
          'Habilidades de combate',
          'Tecnologia avançada de Wakanda'
        ]} 
      />
      <Botao 
        texto="Clique Aqui para saber mais!" 
        onClick={() => alert('Descubra mais sobre Pantera Negra!')} 
      />
      <Rodape informacoes="Pantera Negra - Uma lenda da Marvel" />
    </div>
  );
};

export default App;
