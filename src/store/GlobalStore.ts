import { defineStore } from 'pinia'
import { APIService } from '@/services/APIService'
import { FirestoreService } from '@/services/FirestoreService'
import { Cat } from '@/models/Cat'
import { Reservation } from '@/models/Reservation'

const firestoreService = new FirestoreService()
const apiService = new APIService(firestoreService)

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      cats: [] as Cat[]

    }
  },
  getters: {

  },
  actions: {
    createCat () {
      apiService.setNewCat()
    },
    async getCats () {
      this.cats = await apiService.getAllCats()
    },
    createNewReservation (reservation: Reservation, collection: string) {
      apiService.createNewReservation(reservation, collection)
    }
  }
})
