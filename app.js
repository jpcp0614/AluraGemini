function pesquisar() {
	let section = document.getElementById('resultados-pesquisa');
	let campoPesquisa = document.getElementById('campo-pesquisa').value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Você não digitou nada</p>"
    return;
  };

	let resultados = '';

	for (let dado of dados) {
		if (
			dado.titulo.toLowerCase().includes(campoPesquisa) ||
			dado.descricao.toLowerCase().includes(campoPesquisa)
		) {
			resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
		}
	}

  if (!resultados) {
    section.innerHTML = "<p>Nenhum resultado encontrado</p>"
    return;
  }

	section.innerHTML = resultados;
}
