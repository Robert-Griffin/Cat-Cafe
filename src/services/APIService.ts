import { Cat } from '@/models/Cat'
import { FirestoreService } from './FirestoreService'

export class APIService {
  firestoreService: FirestoreService

  constructor (firestoreService: FirestoreService) {
    this.firestoreService = firestoreService
  }

  getTest () {
    this.firestoreService.getTest()
  }

  setNewCat () {
    this.firestoreService.createNewCat()
  }

  async getAllCats () {
    return await this.firestoreService.fetchAllCats()
  }
}
