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
        return { error: false, message: "User Created", data: user }
    }
    catch (error) {
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
    try {
        const q = query(collection(db, "orders"),
            orderBy("orderDetails.orderId", "desc")
        );
        const querySnapshot = await getDocs(q);

        let copyData = []
        querySnapshot.forEach((doc) => {
            copyData.push(doc.data())
        });

        let id

        if (!copyData[0]) {
            id = '0000000001'
        }

        if (copyData[0]) {
            const orderId = parseInt(copyData[0].orderDetails.orderId)
            id = orderId + 1
            id = String(id)

            for (let i = id.length; i < 10; i++) {
                id = "0" + id
            }
        }

        data.userId = auth.currentUser.uid

        data.buyerDetails.userId = auth.currentUser.uid
        data.buyerDetails.displayName = auth.currentUser.displayName

        data.orderDetails.orderStatus = "pending"
        data.orderDetails.orderNumber = Math.floor(Math.random() * 1000000000);
        data.orderDetails.orderId = id

        const date = new Date();
        data.orderDetails.orderDateTime = String(date)

        //new
        data.docUpdate = true

        const docRef = await addDoc(collection(db, "orders"), data)

        const updateDocRef = doc(db, "orders", docRef.id);

        await updateDoc(updateDocRef, {
            docId: docRef.id
        });

        return { error: false, message: "Your order has been placed!" }

    }
    catch (error) {
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
        return { error: false, message: "Success", data: array }
    }
    catch (error) {
        return { error: true, message: error.message, data: [] }
    }
}

async function cancelOrder(docId, orderDetails) {
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
    try {
        const docRef = doc(db, "orders", docId);

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
    try {
        const docRef = doc(db, "orders", docId);

        await updateDoc(docRef, {
            orderDetails: { ...orderDetails, orderStatus: 'pending' },
            docUpdate: true
        });

        return { error: false, message: "success" }
    }
    catch (error) {
        console.log(error.message)
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
