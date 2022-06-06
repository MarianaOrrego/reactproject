import { heroes } from "../data/heores"

export const getHeroeByPublisher = (publisher) =>{

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher )
}