import { Entity, Fields } from "remult";

// In shared folder so can share with front/backend
@Entity("tasks", { allowApiCrud: true})  // allow full capabilities of apicrud
export class Task {
    @Fields.autoIncrement()
    id = 0;
    @Fields.string()
    title = "";
    @Fields.boolean()
    completed = false;
}