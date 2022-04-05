import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGird } from './components/GifGrid';

export const GifExpertApp = ()=> {

    const [categories, setCategories] = useState(['Animales']);

    return (
        <>
            <h1>GifExpertApp</h1>
                <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
               {
                   categories.map( category => 
                   <GifGird 
                        category={ category }
                        key={ category }
                    /> 
                   )
               }
            </ol>
        </>
    );

};

