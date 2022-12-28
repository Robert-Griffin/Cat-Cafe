import { buildConfig } from './../config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Cat } from '@/models/Cat'
import { Reservation } from '@/models/Reservation'

const config = buildConfig(process.env)

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebase)
}
const firestoreDatabase = firebase.firestore()
export class FirestoreService {
  db: firebase.firestore.Firestore

  constructor () {
    this.db = firestoreDatabase
  }

  async createNewCat () {
    this.db.collection('cats').doc().set({
      description: 'Cat # 2',
      name: 'George'
    })
    .then(() => {
      console.log('Document successfully created!')
    })
    .catch((error) => {
      console.error('error writing document: ', error)
    })
  }

  async createNewReservation (reservation: Reservation, collection: string) {
    this.db.collection(collection).add(
      Reservation.toFirestoreJson(reservation)
    ).then((docRef) => {
      console.log('Document written with ID: ', docRef.id)
    }).catch((error) => {
      console.error('error adding document: ', error)
    })
  }

  async fetchAllCats (): Promise<Cat[]> {
    try {
    const query = (await this.db.collection('cats').get()) as firebase.firestore.QuerySnapshot<Cat>

    const cats: Cat[] = []

      query.forEach((doc) => {
      cats.push(
        Cat.fromJson(doc)
      )
    })
    console.log(...cats)
    return cats
  } catch (error) {
    return Promise.reject(error)
  }
  }
}
