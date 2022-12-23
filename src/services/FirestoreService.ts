import { buildConfig } from './../config'
import firebase from 'firebase/app'
import 'firebase/firestore'

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

  async getTest () {
    const query = await this.db.collection('test').doc('abc').get()
    console.log(query.data())
    console.log({ ...query.data(), id: query.id })
  }
}
