const BotoesControle = (
    retrocederFaixa,
    voltar15s,
    tocarOuPausarFaixa,
    isPlaying,
    avancar15s,
    avancarFaixa
) => {
    return (
        <div className="caixa-botoes">
            <button onClick={retrocederFaixa}><i className="bi bi-skip-start"></i></button>
            <button onClick={voltar15s}><i className="bi bi-arrow-counterclockwise"></i></button>

            <button onClick={tocarOuPausarFaixa}>
                <i className={`bi bi-${isPlaying ? "pause" : "play"}-circle-fill`}></i>
            </button>

            <button onClick={avancar15s}><i className="bi bi-arrow-counterclockwise"></i></button>
            <button onClick={avancarFaixa}><i className="bi bi-skip-end"></i></button>
        </div>
    );
}

export default BotoesControle;
