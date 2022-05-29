import { useContext } from "react"
import { UserContext } from "./UserContext"

export const HomeScreen = () => {

    const { user } = useContext( UserContext ); //Esto llama al usuario creado en el MainApp
    console.log( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}