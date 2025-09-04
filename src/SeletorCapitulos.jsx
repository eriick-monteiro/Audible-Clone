function SeletorCapitulos(props) {
	return (
		<button className="seletor">
			<i class="bi bi-list-task"></i>
			<p>{`Capítulo ${props.capituloAtual}`}</p>
		</button>
	);
}

export default SeletorCapitulos;
