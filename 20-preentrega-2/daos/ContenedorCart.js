import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

class ContenedorCart {
    constructor(fireDbConfig) {
        this.dbConfig = fireDbConfig;
        this.db = getFirestore(initializeApp(this.dbConfig));
    }

    async create(arrayCarts) {
        try {
            for (const cartToAdd of arrayCarts) { await addDoc(collection(this.db, "carts"), cartToAdd) }
            console.log('Data inserted.');
        } catch (err) {
            console.log(err);
        }
    }

    async read() {
        try {
            const querySnapshot = await getDocs(collection(this.db, "carts"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().cartId} ${doc.data().timestamp}`);
            });

        } catch (err) {
            console.log(err);
        }
    }

    async update(productId, set) {
        try {
            const cartUpdateRef = doc(this.db, `carts/${productId}`);
            await updateDoc(cartUpdateRef, set);
            console.log("Updated doc!");
        } catch (err) {
            console.log(err);
        }
    }

    async delete(idDelete) {
        try {
            const cartsRef = doc(this.db, `carts/${idDelete}`);
            await deleteDoc(cartsRef);
            console.log(`delete doc!, ID: ${idDelete}`);
        } catch (err) {
            console.log(err);
        }
    }
}

export default ContenedorCart;