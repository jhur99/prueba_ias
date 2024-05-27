import { events } from "../domain/events/events.entity";
import { EventsRepositroy } from "../domain/events/events.repository";

export class eventsUseCase{
    constructor(private readonly repository: EventsRepositroy){

    }

    async listEvents(){
        const foundEvents = await this.repository.getEvents
        return foundEvents;
    }

    async createEvent(event: events){
        const eventToCreate = event
        await this.repository.createEvent(eventToCreate)
    }

    async getEvent(id: string){
        const foundEvent = await this.repository.getEvent(id)
        return foundEvent
    }

    async registerUser(userId:string, eventId: string){
        let foundEvent = await this.getEvent(eventId)
        foundEvent.userId = userId
        return foundEvent
    }

    async getEventsByUser(userId: string){
        const foundEvents = await this.repository.getEventsByUser(userId)
    }

}