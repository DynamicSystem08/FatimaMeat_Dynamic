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
    apiKey: "AIzaSyChopD35ZVwOSV9Hks1hoNEiCB2QeQ8xV4",
    authDomain: "fatimameat-124a8.firebaseapp.com",
    projectId: "fatimameat-124a8",
    storageBucket: "fatimameat-124a8.appspot.com",
    messagingSenderId: "270004706470",
    appId: "1:270004706470:web:15bca07f5582b0e12ae867"
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
        return { error: false, message: "Login Successful", data: res.user }
    }
    catch (error) {
        // console.log(error)
        return { error: true, message: error.message, data: null }
    }
}

async function signOutUser() {
    try {
        await signOut(auth)
        return { error: false, message: "signedOut" }
    }
    catch (error) {
        return { error: true, message: error.message }
    }

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
        const q = query(collection(db, "orders"), orderBy("orderId"));

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

async function getCurrentUsersOrders(uid) {
    try {
        const q = query(collection(db, "orders"), where("uid", "==", uid));
        const array = []

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
        });

        return { error: false, message: "Success", data: array }
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
    getAllOrders,
    getCurrentUsersOrders
}
