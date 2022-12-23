import { FirestoreService } from './FirestoreService'

export class APIService {
  firestoreService: FirestoreService

  constructor (firestoreService: FirestoreService) {
    this.firestoreService = firestoreService
  }

  getTest () {
    this.firestoreService.getTest()
  }
}
