export class Cat {
    public name: string
    public description: string
    public imgUrl = 'https://cataas.com/cat/says/hello%20world!'
    public id: string

    constructor (name: string, description: string, id: string) {
        this.name = name
        this.description = description
        this.id = id
    }

    public static fromJson (payload: any) {
        return new Cat(payload.name, payload.description, payload.id)
    }

    public toFirestoreJson (payload: Cat) {
        return {
            name: payload.name,
            description: payload.description,
            imgUrl: payload.imgUrl

        }
    }
}
