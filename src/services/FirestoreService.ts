import { buildConfig } from './../config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Cat } from '@/models/Cat'

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

  async createNewCat () {
    // const batch = this.db.batch()

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
