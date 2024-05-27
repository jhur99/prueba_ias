import { eventRepositoryImpl } from "../../../implementation/eventsRepository.impl";

export class getEventsController{
    constructor(private repoImpl: eventRepositoryImpl){
        repoImpl = new eventRepositoryImpl()
    }

    async getEvent(eventid: string){
        await this.repoImpl.getEvent(eventid)
    }
}