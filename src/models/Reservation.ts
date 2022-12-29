import firebase from 'firebase/app'
import 'firebase/firestore'

export class Reservation {
    public id?: string
    public firstName: string
    public lastName: string
    public email: string
    public phoneNumber: string
    public reservationDate: string
    public reservationTime: number

    constructor (firstName: string, lastName: string, email: string, phoneNumber: string, reservationDate: string, reservationTime: number, id?: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber
        this.reservationDate = reservationDate
        this.reservationTime = reservationTime
    }

    public static fromJson (payload: firebase.firestore.QueryDocumentSnapshot<Reservation>) {
        return new Reservation(
            payload.data().firstName,
            payload.data().lastName,
            payload.data().email,
            payload.data().phoneNumber,
            payload.data().reservationDate,
            payload.data().reservationTime,
            payload.id
            )
    }

    public static toFirestoreJson (payload: Reservation) {
        console.log('in toFirestoreJson, payload.reservationTime is ', payload.reservationTime)
        return {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            reservationDate: payload.reservationDate,
            reservationTime: payload.reservationTime
        }
    }
}
