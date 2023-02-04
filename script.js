const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");

/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function cripto() {
	const textoEncriptado = criptografar(textoEntrada.value);
	textoSaida.value = ""
	textoSaida.value = textoEncriptado;
	textoEntrada.value = "";
}

function criptografar (stringEncriptada) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();
	for(let i = 0 ; i < matrizCodigo.length ; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
		}
	}
	return stringEncriptada;
}

function descripto() {
	const textoDesencriptado = descriptografar(textoEntrada.value);
	textoSaida.value = ""
	textoSaida.value = textoDesencriptado;
	textoEntrada.value = "";
}

function descriptografar (stringDesencriptada) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();
	for(let i = 0 ; i < matrizCodigo.length ; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
		}
	}
	return stringDesencriptada;
}

function copiar () {
	const textoCopiado = textoSaida.value;
	navigator.clipboard.writeText(textoCopiado)
	textoEntrada.value = "";
	textoSaida.value = "";
}

