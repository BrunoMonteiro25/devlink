import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAJv2hKAHR5JYG4fSsw3na1thKkoiSDOZY',
  authDomain: 'devlinks-7a9bf.firebaseapp.com',
  projectId: 'devlinks-7a9bf',
  storageBucket: 'devlinks-7a9bf.appspot.com',
  messagingSenderId: '466351630779',
  appId: '1:466351630779:web:37b8b8654365538017bc9e',
  measurementId: 'G-XEBSBJ3NJV',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
