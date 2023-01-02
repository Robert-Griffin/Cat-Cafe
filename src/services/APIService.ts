import { Reservation } from '@/models/Reservation'
import { FirestoreService } from './FirestoreService'

export class APIService {
    firestoreService: FirestoreService

    constructor(firestoreService: FirestoreService) {
        this.firestoreService = firestoreService
    }

    setNewCat() {
        this.firestoreService.createNewCat()
    }

    async getAllCats() {
        return await this.firestoreService.fetchAllCats()
    }

    createNewReservation(reservation: Reservation, collection: string) {
        this.firestoreService.createNewReservation(reservation, collection)
    }

    async fetchReservationsByDate(date: Date, collection: string) {
        return await this.firestoreService.fetchReservationsByDate(date, collection)
    }
}
