import { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SeletorCapitulos from './SeletorCapitulos.jsx';
import GerenciadorFaixa from './GerenciadorFaixa.jsx';
import brasCubasImg from './assets/bras_cubas.jpeg';
import BotoesControle from './BotoesControle.jsx';
import livro from './assets/capitulos/livro.js';
import Capa from './Capa.jsx';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [faixaAtual, setFaixaAtual] = useState(0);
  const tagAudio = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      tocarFaixa();
    }
  }, [
    faixaAtual
  ]);

  const informacoesLivro = {
    nome: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    capitulos: livro,
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: "Capa do Livro Memórias Póstumas de Brás Cubas",
  };

  function tocarFaixa() {
    tagAudio.current.play();
    setIsPlaying(true);
  };

  function pausarFaixa() {
    tagAudio.current.pause();
    setIsPlaying(false);
  };

  const tocarOuPausarFaixa = () => {
    if (isPlaying) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  const avancarFaixa = () => {
    if (informacoesLivro.totalCapitulos === faixaAtual + 1) {
      setFaixaAtual(0);
    } else {
      setFaixaAtual(faixaAtual + 1);
    }
  }

  const retrocederFaixa = () => {
    if (faixaAtual === 0) {
      setFaixaAtual(informacoesLivro.totalCapitulos - 1);
    } else {
    setFaixaAtual(faixaAtual - 1);
    }
  }

  const avancar15s = () => {
    tagAudio.current.currentTime += 15;
  }


  const voltar15s = () => {
    tagAudio.current.currentTime -= 15;
  }

  return (
    <>
      <Capa
        imagemCapa={informacoesLivro.capa}
        textoAlternativo={informacoesLivro.textoAlternativo}
      />

  	  <SeletorCapitulos capituloAtual={faixaAtual + 1} />
      <GerenciadorFaixa
        faixa={informacoesLivro.capitulos[faixaAtual]}
        referencia={tagAudio}
      />
  	  <BotoesControle
        isPlaying={isPlaying}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
        avancarFaixa={avancarFaixa}
        retrocederFaixa={retrocederFaixa}
        avancar15s={avancar15s}
        voltar15s={voltar15s}
      />
    </>
  );
}

export default App;
