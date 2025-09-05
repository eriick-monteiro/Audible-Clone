const ContainerProgresso = ({ tempoAtualFaixa, tempoTotalFaixa, referencia, avancarPara }) => {
    const formatarTempo = (tempoEmSegundos) => {
        const tempo = new Date(null);
        tempo.setSeconds(tempoEmSegundos);
        return tempo.toISOString().slice(14, 19);
    };
    return (
        <section className="container-progresso" onClick={avancarPara}>
            <div
              className="progresso-total" ref={referencia} onClick={avancarPara}>
                <div className="progresso-atual" style={{
                    width: `${(tempoAtualFaixa/tempoTotalFaixa) * 100}%`
                }}></div>
                <div className="marcador-posicao" style={{
                    left: `${(tempoAtualFaixa/tempoTotalFaixa) * 100}%`
                }}></div>
            </div>
            <div className="metricas-tempo">
                <p>{formatarTempo(tempoAtualFaixa)}</p>
                <p>{formatarTempo(tempoTotalFaixa)}</p>
            </div>
        </section>
    );
};

export default ContainerProgresso;
