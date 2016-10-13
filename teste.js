function incluir() {
	var nome = document.getElementById("nome").value;
	var tabela = document.getElementById("pessoas");
	var linha = document.createElement("tr");
	
	var colName = document.createElement("td");
	colName.appendChild(document.createTextNode(nome));
	linha.appendChild(colName);
	
	var colEndereco = document.createElement("td");
	colEndereco.appendChild(document.createTextNode("jardim da penha"));
	linha.appendChild(colEndereco);
	
	var colTelefone = document.createElement("td");
	colTelefone.appendChild(document.createTextNode("(71) 3248-8349"));
	linha.appendChild(colTelefone);
	
	tabela.appendChild(linha);
}