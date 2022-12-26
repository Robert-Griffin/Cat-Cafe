import { defineStore } from 'pinia'
import { APIService } from '@/services/APIService'
import { FirestoreService } from '@/services/FirestoreService'
import { Cat } from '@/models/Cat'

const firestoreService = new FirestoreService()
const apiService = new APIService(firestoreService)

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      count: 0,
      cats: [] as Cat[]

    }
  },
  getters: {
    double: state => state.count * 2

  },
  actions: {
    increment () {
      this.count++
    },
    getTest () {
      apiService.getTest()
    },
    createCat () {
      apiService.setNewCat()
    },
    async getCats () {
      this.cats = await apiService.getAllCats()
    }
  }
})
