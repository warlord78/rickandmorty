//Obtener los Persoanjes
const API = 'https://rickandmortyapi.com/api/character/';

//Async, si mandamos una ID llamara al personaje que deseamos
const getData = async (id) => {
  //Si id existe retorna, una estructura nueva, trae a ip y concatecatenale el id, en caso de que no exista devuelve API,traera todos  los personajes para ser render del home
  const apiURl = id ? `${API}${id}` : API;
  try {
      const response = await fetch(apiURl);
      const data = await response.json();
      return data;
  }
  catch(error){
      console.log('Fetch Error', error);
  };
};

export default getData;