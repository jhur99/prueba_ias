import { events } from "./events.entity";

export interface EventsRepositroy{
    getEvents(): Promise<events[]>
    createEvent(event: events): Promise<events>
    getEvent(id:string): Promise<events>
    userRegistry(userId:string, eventId: string): Promise<string>
    getEventsByUser(userId:string): Promise<events[]>
}