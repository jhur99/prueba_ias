import express  from "express";
import { getEventsController } from "../controllers/events.controller.ts/getEvents.controller";
import { eventRepositoryImpl } from "../../implementation/eventsRepository.impl";

export const router = express.Router()

router.get("/iasapi", getEventsController)