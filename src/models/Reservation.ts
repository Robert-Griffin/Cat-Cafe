import firebase from 'firebase/app'
import 'firebase/firestore'

export class Reservation {
    public id?: string
    public firstName: string
    public lastName: string
    public email: string
    public phoneNumber: string
    public reservationDate: Date

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        reservationDate: Date,
        id?: string
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber
        this.reservationDate = reservationDate
    }

    public static fromJson(payload: firebase.firestore.QueryDocumentSnapshot<Reservation>) {
        return new Reservation(
            payload.data().firstName,
            payload.data().lastName,
            payload.data().email,
            payload.data().phoneNumber,
            payload.data().reservationDate,
            payload.id
        )
    }

    public static toFirestoreJson(payload: Reservation) {
        return {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            reservationDate: payload.reservationDate,
        }
    }
}
