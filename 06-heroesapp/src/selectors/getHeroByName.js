import { heroes } from "../data/heores";

export const getHeroeByName = (name = '') => {

    if( name === ''){
        return[];
    }

    name = name.toLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));

}