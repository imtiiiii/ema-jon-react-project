import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from '../Firebase/Firebase.init'
initFirebase();
const useFirebase = () => {
    const [userInfo, setUserInfo] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {


        // }).catch((error) => {

        // });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
            } else {
                setUserInfo(null);


            }
        });
    }, [])
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUserInfo(result.user);

            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserInfo(null);
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return {
        googleLogin,
        loginWithEmail,
        logout,
        userInfo
    }
}
export default useFirebase;