import { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCouter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])


    return (
        <div>
            <h1>LayoutEffect BreakingBad</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                >
                    {quote}
                </p>
            </blockquote>


            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>


            <div className='d-flex justify-content-center'>

                <button
                    className="btn btn-primary"
                    onClick={increment}
                >
                    Siguiente quote
                </button>
            </div>
        </div>
    )
}
