
let numeroSecreto = Math.floor(Math.random()*10) +1;

const entradaNumero = document.querySelector("#entrada-numero");

const contadorIntentos = document.querySelector("#contador-intentos");

const botonAdivinar = document.querySelector("#adivinar");

const mensaje = document.querySelector("#mensaje");

const botonJugarOtraVez = document.querySelector("#jugar-otra-vez");

let intentosRestantes = 4;

botonJugarOtraVez.style.display = "none";


entradaNumero.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		botonAdivinar.click();
	}	
});


botonAdivinar.addEventListener("click", function() {

	let guardarNumero = Number(entradaNumero.value)

	if (guardarNumero < 1 || guardarNumero >10) {
		mensaje.textContent = "El numero tiene que estar entre 1 y 10";
		return; 
	}
// Si el número es igual al secreto: has ganado
	if (guardarNumero === numeroSecreto) {	 	
		mensaje.textContent = "Acertaste"
		botonAdivinar.disabled = true;	
		botonJugarOtraVez.style.display = "block";
		contadorIntentos.style.display = "none";

// Si no es igual (cualquier otro caso): has fallado
	} else {
	// Fallar cuesta un intento: se resta aquí y no antes,
	// porque acertar no debe quitar ninguno
		intentosRestantes = intentosRestantes-1
	// Aquí ya sabemos que es distinto, solo queda decidir si es mayor o menor
		if (guardarNumero < numeroSecreto) {
			mensaje.textContent = "Fallaste, el número es mayor";			
		} else {
			mensaje.textContent = "Fallaste, el número es menor";	
		}
	// Segundo if, independiente del anterior: solo cuida el texto del contador
		if (intentosRestantes === 1) {	
			contadorIntentos.textContent = "Te queda 1 intento"			
		} else{
			contadorIntentos.textContent ="Te quedan " + intentosRestantes + " intentos";
		}
	}	

	if (intentosRestantes === 0) {
		mensaje.textContent = "Game Over, el número era " + numeroSecreto;
		botonAdivinar.disabled = true;
		botonJugarOtraVez.style.display = "block";
		contadorIntentos.style.display = "none";
	}		
} );


botonJugarOtraVez.addEventListener("click", function () {	
	numeroSecreto = Math.floor(Math.random() * 10) + 1;
	entradaNumero.value = "";
	intentosRestantes = 4
	contadorIntentos.textContent = "Te quedan " + intentosRestantes + " intentos";
	contadorIntentos.style.display = "block";
	mensaje.textContent = "";
	botonAdivinar.disabled = false;
	botonJugarOtraVez.style.display = "none"

});


