// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4OUcnp8hYarcEbMT_cbDGO5r5UocoFco',
  authDomain: 'cat-cafe-949dd.firebaseapp.com',
  projectId: 'cat-cafe-949dd',
  storageBucket: 'cat-cafe-949dd.appspot.com',
  messagingSenderId: '962028082290',
  appId: '1:962028082290:web:2cfeeff91b316a81ae5eeb',
  measurementId: 'G-YTX3RMPTNL'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
