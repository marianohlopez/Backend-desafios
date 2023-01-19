import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc, Firestore } from "firebase/firestore";
import mongoose from "mongoose";
import { config } from "../config/config.js";

export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEGIN_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

let connectDb;

const connectMongo = async (url) => {
    await mongoose.connect(url);
};

const connectFirebase = async (url) => {
    getFirestore(initializeApp(firebaseConfig))
};

if (config.database === "MONGO") {
    connectDb = connectMongo;
} else {
    connectDb = connectFirebase;
}

export const db = { connectDb };