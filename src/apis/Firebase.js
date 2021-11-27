import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPzrYzsdqFkP-7vwKtzTnDMCz2yLHz8a8',
  authDomain: 'dipen-103cc.firebaseapp.com',
  projectId: 'dipen-103cc',
  storageBucket: 'dipen-103cc.appspot.com',
  messagingSenderId: '269969062661',
  appId: '1:269969062661:web:8798688f6d1ab7cc42156c',
  measurementId: 'G-C76L3KBVJQ',
};

initializeApp(firebaseConfig);

export const firebaseAuth = {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
export const firestore = { getFirestore, collection, addDoc };
