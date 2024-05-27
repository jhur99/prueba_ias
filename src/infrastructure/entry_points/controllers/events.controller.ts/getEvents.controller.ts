import { eventRepositoryImpl } from "../../../implementation/eventsRepository.impl";

export class getEventsController{
    constructor(private repoImpl: eventRepositoryImpl){
        repoImpl = new eventRepositoryImpl()
    }

    async getAllEvents(){
        await this.repoImpl.getEvents()
    }
}