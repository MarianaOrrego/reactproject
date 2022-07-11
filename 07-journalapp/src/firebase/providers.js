import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProv = new GoogleAuthProvider();

googleProv.setCustomParameters({
    prompt: 'select_account'
})

export const signInGoogle = async() => {

    try {
        
        const result = await signInWithPopup(firebaseAuth, googleProv);
        // const credential = GoogleAuthProvider.credentialFromResult( result );

        const { displayName, email, photoURL, uid} = result.user;
        
        return{
            ok:true,
            displayName, email, photoURL, uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage
        }
    }
}