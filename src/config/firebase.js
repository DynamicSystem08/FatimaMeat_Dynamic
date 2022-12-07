import { initializeApp } from "firebase/app";
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged, updateProfile
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyARJpv58bJ9bjpv0wnYkOPTbNrX6VFGUWM",
//     authDomain: "hu-fyp-erp-43bc0.firebaseapp.com",
//     projectId: "hu-fyp-erp-43bc0",
//     storageBucket: "hu-fyp-erp-43bc0.appspot.com",
//     messagingSenderId: "894076141393",
//     appId: "1:894076141393:web:f71a3d83e7f4602e80dd70"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

async function registerUser(data) {
    const { username, email, password } = data

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = res
        console.log("firebase user ==>", user.uid)

        await updateProfile(auth.currentUser, {
            displayName: username,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        })

        const docRef = await addDoc(collection(db, "users"), {
            email,
            username,
            uid: user.uid
        });
        console.log(docRef)
        return { error: false, message: "User Created" }
    }
    catch (error) {
        console.log(error)
        return { error: true, message: error.message }
    }
}

// async function signinUser(data) {
//     const { email, password } = data

//     try {
//         const res = await signInWithEmailAndPassword(auth, email, password)
//         return { error: false, message: "User Created" }
//     }
//     catch (error) {
//         console.log(error)
//         return { error: true, message: error.message }
//     }
// }

async function signOutUser() {
    const result = await signOut(auth)
    return result
}

export {
    auth,
    onAuthStateChanged,
    registerUser,
    signinUser,
    signOutUser
}
