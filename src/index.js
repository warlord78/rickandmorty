import router from './routes';

/* 
Valor window, saber si esta en el contexto 

manejador de eventos:addEventListenerque escucha si algo sucede,

si la carga de la pagina sucede, estara escucnado
el evento load, y una funcion router


*/

window.addEventListener('load', router);
//Escuchar las rutas,en este caso el # a las que nos estamos moviendo, cuando cambia
window.addEventListener('hashchange', router);