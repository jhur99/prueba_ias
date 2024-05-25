import { events } from "../../../../domain/events/events.entity";
import { eventModel } from "../../../driven_adapters/database/models/events.model";
import { eventRepositoryImpl } from "../../../implementation/eventsRepository.impl";

export class getEventsController{
    constructor(private repoImpl: eventRepositoryImpl){
        repoImpl = new eventRepositoryImpl()
    }

    async getAllEvents(event: events){
        await this.repoImpl.createEvent(event)
    }
}