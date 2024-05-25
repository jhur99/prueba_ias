import { events } from "../../domain/events/events.entity";
import { EventsRepositroy } from "../../domain/events/events.repository";
import { eventModel } from "../driven_adapters/database/models/events.model";

export class eventRepositoryImpl implements EventsRepositroy {
    async getEvents(): Promise<events[]> {
        const events =  await eventModel.findAll()
        throw new Error("Method not implemented.");
    }
    async createEvent(event: events): Promise<events> {
        throw new Error("Method not implemented.");
    }
    getEvent(id: string): Promise<events> {
        throw new Error("Method not implemented.");
    }
    userRegistry(userId: string, eventId: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getEventsByUser(userId: string): Promise<events[]> {
        throw new Error("Method not implemented.");
    }
    
}