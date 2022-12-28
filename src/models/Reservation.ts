export class Reservation {
    public id: string
    public firstName: string
    public lastName: string
    public email: string
    public phoneNumber: string
    public reservationDate: Date
    public reservationStartTime: Date
    public reservationEndTime: Date

    constructor (id: string, firstName: string, lastName: string, email: string, phoneNumber: string, reservationDate: Date, reservationStartTime: Date, reservationEndTime: Date) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber
        this.reservationDate = reservationDate
        this.reservationStartTime = reservationStartTime
        this.reservationEndTime = reservationEndTime
    }

    public static fromJson (payload: any) {
        return new Reservation(payload.id, payload.firstName, payload.lastName, payload.email, payload.phoneNumber, payload.reservationDate, payload.reservationStartTime, payload.reservationEndTime)
    }

    public static toFirestoreJson (payload: Reservation) {
        return {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            reservationDate: payload.reservationDate,
            reservationStartTime: payload.reservationStartTime,
            reservationEndTime: payload.reservationEndTime
        }
    }
}
