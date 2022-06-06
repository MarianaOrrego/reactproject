import { useMemo } from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher"
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroeByPublisher(publisher), [publisher]) ;

    return (
        <div className="row rows-cols-1 rows-cols-3 g-3 animate__animated animate__fadeInLeft">
            {
                heroes.map(heroe => (
                    <HeroeCard 
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
