import { events } from "./events.entity";

export class eventValueObject implements events{
    name: string;
    date: string;
    location: string;
    userId?: string | undefined;

    constructor(event: events){
        this.name = event.name,
        this.date = event.date,
        this.location = event.location,
        this.userId = event.userId
    }
}