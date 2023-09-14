import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    } from "firebase/auth"
import  auth  from "../Firebase"

const userAuthContext = createContext();

const UserAuthContextProvider = ({children}) => {

    const [user, setUser] = useState('');
    const signUp = (email, password) => {
        console.log('wiadomośc z UserAuthContext');
        return (
            createUserWithEmailAndPassword(auth, email, password)
                .then((useCredential) => {
                    console.log(useCredential);
                    console.log('konto zostało założone pomyślnie')
                }).catch((error) => {
                console.log(error);
                })
        )
    }
    const logIn = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        } )

        return () => {
            unsubscribe();
        }
    }, []);

    return <userAuthContext.Provider
        value={{user, signUp, logIn}}
    >
        {children}
    </userAuthContext.Provider>
};

export function useUserAuth() {
    return useContext(userAuthContext);
};
export default UserAuthContextProvider

