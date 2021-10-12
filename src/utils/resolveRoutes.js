// Va a Pasar la ruta  obtenida por la funcion anterior de GetHast
//Se encargara de resolver las rutas 
const resolveRoutes = (route) => {
/* La API tiene "N" cantidad de Personajes, no son mas de 1000, solo son 3 niveles
si en dado caso obtuvo un "#ID" > a 3  caracteres y si no obtuvo un "#ID"
regresara un "Slash /" Si es < a 3 elementos esta entrando en el flujo de la API

*/
 if(route.length <=3) {
  /*Si validRoute es igual al Slash, no hay ninguna ruta dentro de # y 
  poder retornar esta ruta, o sino  Retornar el valor de id */
  let validRoute = route === '/' ? route: '/:id'; 
  return validRoute; 
 }
 return `/${route}`; // /about
}

export default resolveRoutes;