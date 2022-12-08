import { initializeApp } from "firebase/app";
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged, updateProfile
} from "firebase/auth";
import {
    getFirestore, collection, addDoc,
    query, where, getDocs, orderBy,
    setDoc, doc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARJpv58bJ9bjpv0wnYkOPTbNrX6VFGUWM",
    authDomain: "hu-fyp-erp-43bc0.firebaseapp.com",
    projectId: "hu-fyp-erp-43bc0",
    storageBucket: "hu-fyp-erp-43bc0.appspot.com",
    messagingSenderId: "894076141393",
    appId: "1:894076141393:web:f71a3d83e7f4602e80dd70"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function registerUser(data) {
    const { username, email, password } = data

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const { user } = res

        await updateProfile(auth.currentUser, {
            displayName: username,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        })

        const uid = user.uid

        const docRef = await setDoc(doc(db, "users", uid), {
            email,
            username,
            uid: user.uid
        });
        return { error: false, message: "User Created" }
    }
    catch (error) {
        console.log(error)
        return { error: true, message: error.message }
    }
}

async function signinUser(data) {
    const { email, password } = data

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        return { error: false, message: "Login Successful" }
    }
    catch (error) {
        // console.log(error)
        return { error: true, message: error.message }
    }
}

async function signOutUser() {
    const result = await signOut(auth)
    return result
}

async function emailSupport() {

    const result = await "Email sent"
    const message = result
    return { error: false, message: message }
}

async function createOrderFirebase(data) {
    // console.log("firebase auth", auth.currentUser.uid)

    try {
        const q = query(collection(db, "orders"),
            orderBy("orderId", "desc")
            // , where("capital", "==", true)
        );
        const querySnapshot = await getDocs(q);

        let copyData = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            copyData.push(doc.data())
        });

        let id

        if (!copyData[0]) {
            id = '0000000001'
        }

        if (copyData[0]) {
            const orderId = parseInt(copyData[0].orderId)

            id = orderId + 1
            id = String(id)

            for (let i = id.length; i < 10; i++) {
                id = "0" + id
            }
        }

        data.orderId = id
        data.userId = auth.currentUser.uid

        data.buyerDetails.userId = auth.currentUser.uid
        data.buyerDetails.displayName = auth.currentUser.displayName
        data.orderStatus = "pending"
        data.orderNumber = Math.floor(Math.random() * 1000000000);

        const date = new Date();
        data.orderDateTime = date


        const docRef = await addDoc(collection(db, "orders"), data)


        return { error: false, message: "Your order has been placed!" }

    }
    catch (error) {
        console.log(error)
        return { error: true, message: error.message }
    }
}

async function getAllOrders() {
    try {
        const q = query(collection(db, "orders"));

        const querySnapshot = await getDocs(q);
        let copyData = []
        querySnapshot.forEach((doc) => {
            copyData.push(doc.data())
        });

        return { error: false, data: copyData }
    }
    catch (error) {
        return { error: true, message: error.message, data: [] }
    }
}

export {
    auth,
    onAuthStateChanged,
    registerUser,
    signinUser,
    signOutUser,
    emailSupport,
    createOrderFirebase,
    getAllOrders
}
