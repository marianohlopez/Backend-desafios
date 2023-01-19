import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from "../db/db.js"

export class FirebaseDao {
    constructor(collection) {
        this.collection = collection;
        this.dbConfig = firebaseConfig;
        this.db = getFirestore(initializeApp(this.dbConfig));
    }

    async create(docToAdd) {
        try {
            await addDoc(collection(this.db, this.collection), docToAdd)
            console.log('Data inserted.');
        } catch (err) {
            console.log(err);
        }
    }

    async getAll() {
        try {
            const querySnapshot = await getDocs(collection(this.db, this.collection));
            return querySnapshot.forEach((doc) => {
                doc.id;
            });
            //return querySnapshot.docs.data;

        } catch (err) {
            console.log(err);
        }
    }

    async update(productId, set) {
        try {
            const docUpdateRef = doc(this.db, `${this.collection}/${productId}`);
            await updateDoc(docUpdateRef, set);
            console.log("Updated doc!");
        } catch (err) {
            console.log(err);
        }
    }

    async delete(idDelete) {
        try {
            const cartsRef = doc(this.db, `${this.collection}/${idDelete}`);
            await deleteDoc(cartsRef);
            console.log(`delete doc!, ID: ${idDelete}`);
        } catch (err) {
            console.log(err);
        }
    }
}