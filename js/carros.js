carros = [];
function cadastrar(){
	lstCombustivel = [];
	if(chkEtanol.checked)
		lstCombustivel.push(chkEtanol.value);
	if(chkGasolina.checked)
		lstCombustivel.push(chkGasolina.value);
	carro1 = {
		marca:txtMarca.value,
		modelo:txtModelo.value,
		ano:parseInt(txtAno.value),
		escadinha:chkEscadinha.checked,
		tanque:parseInt(txtTanque.value),
		capacidadeTanque:parseInt(txtCapacidadeTanque.value),
		combustivel:lstCombustivel,
		ligar:function(){
			alert("O carro está ligado");
		},
		abastecer:function(litros) {
			if(this.tanque + litros <= this.capacidadeTanque)
				this.tanque += litros;
			else
				alert("Vai transbordar");
		}
	}
	carros.push(carro1);
	exibir();
}

function exibir(){
	mensagem = "<ul>";
	for(i = 0; i < carros.length; i++){
		mensagem += "<li>";
		mensagem += "<p><b>Marca:</b>" + carros[i].marca + "</p>";
		mensagem += "<p><b>Modelo:</b>" + carros[i].modelo + "</p>";
		mensagem += "<p><b>Ano:</b>" + carros[i].ano + "</p>";
		mensagem += "<p><b>Escadinha:</b>" + carros[i].escadinha + "</p>";
		mensagem += "<p><b>Tanque:</b>" + carros[i].tanque + "</p>";
		mensagem += "<p><b>Capacidade do Tanque :</b>" + carros[i].capacidadeTanque + "</p>";
		mensagem += "<p><b>Combustivel:</b>" + carros[i].combustivel.join(', ') + "</p>";
		mensagem += '<p><input type="button" value="Ligar" /><input type="button" value="Abastecer" /></p>';
		mensagem += "</li>";
	}
	mensagem += "</ul>";
	lista.innerHTML = mensagem;
}
	