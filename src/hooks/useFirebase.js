import initializationAuthentication from '../pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut, signInWithPopup, GoogleAuthProvider,updateProfile,GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';
initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleNameChange = e => {
        setName(e.target.value)
    }


    /* Register via Email */
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                handleUpdateUser()
                setUser(result.user)
                console.log(email, password);
                window.location.reload();
            })
    }

    /* log in email */
    const handleUserLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
    }

    /* update user  */
    const handleUpdateUser = ()=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {

          }).catch((error) => {

          });
    }


    /* Handle Google Log In */

        const handleGoogleLogIn = () =>{
            setIsLoading(true);
            return signInWithPopup(auth, googleProvider)
        }






    /* Get the currently signed-in use */
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
              setUser(user)
            }else{
                setUser({});
            }
            setIsLoading(false)
          });
    },[])




    /* Handle  Log Out */
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
        }


    return {
       handleUserLogIn,
       handleUserRegister,
       user,
       handleLogOut,
       handleGoogleLogIn,
       isLoading,
       setIsLoading,
       handleNameChange,
    }
};

export default useFirebase;