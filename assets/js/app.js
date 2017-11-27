
$(document).ready(main);
//cuando el documento este listo ejecuta la funcion main
 //var contador igual a 1
var contador = 1;
 //funcion main se crea 
function main(){
	
	//manejador de eventos cuando el usuario de click en el menu 
	//seleccionamos el elemento

	$('.menu_bar').click(function(){
		 $('nav').toggle(); 
 
		if(contador == 1){
			$('header nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('header nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};

