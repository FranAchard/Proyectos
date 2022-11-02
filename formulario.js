var formulario= document.getElementById('form'),
nombre= form.nombre,
apellido= form.apellido,
correo= form.correo,
sexo= form.genero,
terminos= form.terminos,
error= document.getElementById('error');

function validarNombre(e) {
	if (nombre.value == '' || nombre.value == null) {
         error.style.display ='block';
         error.innerHTML = error.innerHTML + '<li>Complete el campo de nombre por favor </li>'

		e.preventDefault();
	}
	else{
		error.style.display ='none';
	}
}
function validarApellido(e) {
	if (apellido.value == '' || apellido.value == null) {
         error.style.display ='block';
         error.innerHTML = error.innerHTML + '<li>Complete el campo de apellido por favor </li>'

		e.preventDefault();
	}
	else{
		error.style.display ='none';
	}
}

function validarCorreo(e) {
	if (correo.value == '' || correo.value == null) {
         error.style.display ='block';
         error.innerHTML = error.innerHTML + '<li>Complete el campo de correo por favor </li>'

		e.preventDefault();
	}
	else{
		error.style.display ='none';
	}
}
function validarSexo(e){
 	if (sexo.value == '' || sexo.value == null) {
         error.style.display ='block';
         error.innerHTML = error.innerHTML + '<li>Complete el campo de genero por favor </li>'

		e.preventDefault();
	}
	else{
		error.style.display ='none';
	}
}
/*/function validarTerminos(e) {
 	if (terminos.checked == 'false') {
         error.style.display ='block';
         error.innerHTML = error.innerHTML + '<li>Complete el campo de genero por favor </li>'

		e.preventDefault();
	}
	else{
		error.style.display ='none';
	}/*/


function validarForm(e) {
	error.innerHTML ='';
	validarNombre(e);
	validarApellido(e);
	validarCorreo(e);
	validarSexo(e);
	validarTerminos(e);
}

form.addEventListener('submit', validarForm); 