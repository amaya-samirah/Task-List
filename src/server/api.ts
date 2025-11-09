import { remultApi } from "remult/remult-express";
import { Task } from "../shared/task";

export const api = remultApi({
    entities: [Task],
});