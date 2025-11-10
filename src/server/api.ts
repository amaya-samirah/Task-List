import { remultApi } from "remult/remult-express";
import { Task } from "../shared/task";
import { TasksController } from "../shared/TasksController";
import { createPostgresConnection } from "remult/postgres";

export const api = remultApi({
    entities: [Task],
    controllers: [TasksController],
    getUser: (req) => req.session!["user"],
    dataProvider: createPostgresConnection({
        connectionString: "postgres://postgres:MASTERKEY@localhost/postgres"
    }),
});