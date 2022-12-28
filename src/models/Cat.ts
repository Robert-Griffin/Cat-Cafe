import firebase from 'firebase/app'
import 'firebase/firestore'

export class Cat {
    public name: string
    public description: string
    public imgUrl: string
    public imgId: string
    public id: string

    constructor (name: string, description: string, imgId: string, id: string) {
        this.name = name
        this.description = description
        this.id = id
        this.imgId = imgId
        this.imgUrl = 'https://cataas.com/cat/' + imgId
    }

    public static fromJson (payload: firebase.firestore.QueryDocumentSnapshot<Cat>) {
        return new Cat(payload.data().name, payload.data().description, payload.data().imgId, payload.id)
    }

    public toFirestoreJson (payload: Cat) {
        return {
            name: payload.name,
            description: payload.description
        }
    }
}
