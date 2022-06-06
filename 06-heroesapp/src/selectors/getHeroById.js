import { heroes } from "../data/heores"


export const getHeroeById = ( id = '' ) => {

    return heroes.find( heroe => heroe.id === id);
}