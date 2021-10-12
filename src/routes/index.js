//Importar los templates y Crear las rutaas
import  Header  from "../template/Header";
import  Home from '../pages/Home';
import Character from '../pages/Character';
import Erro404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes'; 
import Error404 from "../pages/Error404";
//Crear un objeto para generar las rutas

const routes = {
    '/':Home,
    '/:id':Character,
    '/contact':'Contact',
}
const router = async() =>{
  const header = null  || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  
  //Obtener el Hash # en el que se encuentre
  let hash = getHash();
  //manejar la ruta, esperar, 
  let route = await resolveRoutes(hash);

  //Routes : Es la estructura
  //Route : Es la que obtenemos de la estrucutura de traer del # y luego del resolve
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

//No olivdar exportar nuestro archivos
export default router;