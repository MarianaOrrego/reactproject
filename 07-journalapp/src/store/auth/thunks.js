import { signInGoogle } from "../../firebase/providers";
import { checkinCredential, logout, login } from "./"

export const checkingAuth = (email, password) => {
    return async( dispatch ) =>{

        dispatch( checkinCredential() );
    }
}

export const startGoogle = () => {
    return async( dispatch ) =>{

        dispatch( checkinCredential() );

        const result = await signInGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )
    }
}