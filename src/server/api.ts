import { remultApi } from "remult/remult-express";
import { Task } from "../shared/task";
import { TasksController } from "../shared/TasksController";

export const api = remultApi({
    entities: [Task],
    controllers: [TasksController]
});