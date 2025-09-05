const GerenciadorFaixa = ({faixa, referencia, setTempoAtualFaixa, setTempoTotalFaixa}) => {
    return (
        <audio src={faixa}
        ref={referencia}
        onLoadedMetadata={
                () => setTempoTotalFaixa(referencia.current.duration)
            }
            onTimeUpdate={
                () => setTempoAtualFaixa(referencia.current.currentTime)
            }
        />
    );
};

export default GerenciadorFaixa;
