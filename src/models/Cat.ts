export class Cat {
    public name: string
    public description: string
    public imgUrl: string
    public id: string

    constructor (name: string, description: string, id: string) {
        this.name = name
        this.description = description
        this.id = id
        this.imgUrl = 'https://cataas.com/cat/cute'
    }

    public static fromJson (payload: any) {
        return new Cat(payload.name, payload.description, payload.id)
    }

    public toFirestoreJson (payload: Cat) {
        return {
            name: payload.name,
            description: payload.description
        }
    }
}
