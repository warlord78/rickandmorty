//Importar  los datos del los personajes
import getData from '../utils/getData';

//Retorna la vista que necesitamos
const Home = async () => {
    //esperara y hacer el llamado a la funcion getData
    const characters = await getData(); 
    const view = `
    <div class="Characters">
     ${characters.results.map(character =>`
        <article class="Character-item">
            <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}" >
            <h2>${character.name}</h2>
            </a>
            </article>
        `).join('')} 
     </div>
     `;
    // Join: Generar un bloque, unirlo, no utilizar ninguna forma de separlo, por comillas "", retornar un bloque de HTMl 
    return view;
}
export default Home;