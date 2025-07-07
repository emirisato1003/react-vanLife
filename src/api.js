import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, documentId } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCDNVYV9yyUFNO9jNAjUy0ETu3MuEw4fRk",
    authDomain: "vanlife-d31aa.firebaseapp.com",
    projectId: "vanlife-d31aa",
    storageBucket: "vanlife-d31aa.firebasestorage.app",
    messagingSenderId: "738975130461",
    appId: "1:738975130461:web:77fc4a57f3746456153eb4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export const getVans = async () => {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans;
};

export const getVan = async (id) => {
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef);
    return {
        ...snapshot.data(),
        id: snapshot.id
    };
};

export const getHostVans = async (hostId) => {
    const q = query(vansCollectionRef, where("hostId", "==", hostId));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans;
};

export const getHostVan = async (id) => {
    const q = query(
        vansCollectionRef,
        where(documentId(), "==", id),
        where("hostId", "==", "123")
    );
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans[0]
};

export const loginUser = async (creds) => {
    const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) });
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        };
    }
    return data;
};