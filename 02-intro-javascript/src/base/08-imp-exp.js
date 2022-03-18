import heroes, { owners } from '../data/heroes'
//console.log(owners);
//find
export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroeById(4)); //valor a buscar

//filter
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
//console.log(getHeroeByOwner('Marvel'))