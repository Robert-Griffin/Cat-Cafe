export interface ITimeslot {
    startTime: number
}
export interface ITimeslotOption extends ITimeslot {
    disabled: boolean
}

export const timeslots: ITimeslot[] = [
    {
        startTime: 8,
    },
    {
        startTime: 10,
    },
    {
        startTime: 12,
    },
    {
        startTime: 14,
    },
    {
        startTime: 16,
    },
]
