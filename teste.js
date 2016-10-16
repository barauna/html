function excluir(elemento){
	var tabela = document.getElementById("pessoas");
	var linhas = tabela.getElementsByTagName("td");
	for (var x = 0; x < linhas.length; x++) {
		if(linhas[x].innerText == elemento){
			linhas[x].parentNode.remove();
		}
	}
}

function limpar(){
	var inputs = document.getElementsByTagName("input");
	for (var x = 0; x < inputs.length; x++) {
		if (inputs[x].type != "button"){
			inputs[x].value = "";
		}
	}
}

function incluir() {
	
	var nome = document.getElementById("nome").value;
	var endereco = document.getElementById("endereco").value;
	var telefone = document.getElementById("telefone").value;
	
	var tabela = document.getElementById("pessoas");
	var linha = document.createElement("tr");
	
	var colName = document.createElement("td");
	colName.appendChild(document.createTextNode(nome));
	linha.appendChild(colName);
	
	var colEndereco = document.createElement("td");
	colEndereco.appendChild(document.createTextNode(endereco));
	linha.appendChild(colEndereco);

	var colTelefone = document.createElement("td");
	colTelefone.appendChild(document.createTextNode(telefone));
	linha.appendChild(colTelefone);
	
	var imagem = document.createElement("img");
	imagem.setAttribute("src", "images/exclude.jpg");
	//imagem.addEventListener("click", excluir);
	imagem.setAttribute("onclick", "excluir('" + nome + "')");
	
	
	var colExcluir = document.createElement("td");
	colExcluir.setAttribute("class", "imagem");
	colExcluir.appendChild(imagem);
	linha.appendChild(colExcluir);
	
	tabela.appendChild(linha);
	
	limpar();

	document.getElementById("nome").focus();
	
}
