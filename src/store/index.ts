import { defineStore } from 'pinia'
import { APIService } from '@/services/APIService'
import { FirestoreService } from '@/services/FirestoreService'
const firestoreService = new FirestoreService()
const apiSercive = new APIService(firestoreService)
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, cats: [] }),
  getters: {
    double: state => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    },
    getTest () {
      apiSercive.getTest()
    }
  }
})
