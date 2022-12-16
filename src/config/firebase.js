import { initializeApp } from "firebase/app";
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged, updateProfile
} from "firebase/auth";
import {
    getFirestore, collection, addDoc,
    query, where, getDocs, orderBy,
    setDoc, doc, updateDoc
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
        return { error: false, message: "User Created", data: user }
    }
    catch (error) {
        console.log(error)
        return { error: true, message: error.message, data: null }
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
            orderBy("orderDetails.orderId", "desc")
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
            const orderId = parseInt(copyData[0].orderDetails.orderId)
            console.log("orderId", orderId)
            id = orderId + 1
            id = String(id)

            console.log("id", id)

            for (let i = id.length; i < 10; i++) {
                id = "0" + id
            }
        }
        console.log("id", id)

        data.userId = auth.currentUser.uid

        data.buyerDetails.userId = auth.currentUser.uid
        data.buyerDetails.displayName = auth.currentUser.displayName

        data.orderDetails.orderStatus = "pending"
        data.orderDetails.orderNumber = Math.floor(Math.random() * 1000000000);
        data.orderDetails.orderId = id

        const date = new Date();
        data.orderDetails.orderDateTime = String(date)
        console.log(date)

        const docRef = await addDoc(collection(db, "orders"), data)

        console.log(docRef.id)
        const updateDocRef = doc(db, "orders", docRef.id);

        await updateDoc(updateDocRef, {
            docId: docRef.id
        });

        return { error: false, message: "Your order has been placed!" }

    }
    catch (error) {
        console.log(error)
        return { error: true, message: error.message }
    }
}

async function getAllOrders() {
    try {
        const q = query(collection(db, "orders"), orderBy("orderDetails.orderId"));

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

async function getCurrentUserOrders(uid) {
    try {
        const q = query(collection(db, "orders"), where("userId", "==", uid));
        const array = []

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
        });
        console.log("array", array)
        return { error: false, message: "Success", data: array }
    }
    catch (error) {
        return { error: true, message: error.message, data: [] }
    }
}

async function cancelOrder(docId, orderDetails) {
    console.log(docId)
    try {
        const docRef = doc(db, "orders", docId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            orderDetails: { ...orderDetails, orderStatus: 'cancelled' },
            docUpdate: false
        });

        return { error: false, message: "success" }
    }
    catch (error) {
        console.log(error.message)
        return { error: true, message: error.message }
    }
}

async function markCompletedOrder(docId, orderDetails) {
    console.log(docId)
    try {
        const docRef = doc(db, "orders", docId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            orderDetails: { ...orderDetails, orderStatus: 'completed' },
            docUpdate: false
        });

        return { error: false, message: "success" }
    }
    catch (error) {
        console.log(error.message)
        return { error: true, message: error.message }
    }
}

async function markPendingOrder(docId, orderDetails) {
    console.log(docId)
    try {
        const docRef = doc(db, "orders", docId);

        // Set the "capital" field of the city 'DC'
        await updateDoc(docRef, {
            orderDetails: { ...orderDetails, orderStatus: 'pending' },
            docUpdate: true
        });

        return { error: false, message: "success" }
    }
    catch (error) {
        // console.log(error.message)
        return { error: true, message: error.message }
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
    getCurrentUserOrders,
    cancelOrder,
    markCompletedOrder,
    markPendingOrder
}
