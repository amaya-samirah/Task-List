import { Allow, Entity, Fields, Validators } from "remult";

// In shared folder so can share with front/backend
@Entity("tasks", { allowApiCrud: Allow.authenticated})  // allow full capabilities of apicrud
export class Task {
    @Fields.autoIncrement()
    id = 0;
    @Fields.string<Task>({
        validate: task => {
            if (task.title.length < 1) throw Error("Must enter title");
        }
    })
    title = "";
    @Fields.boolean()
    completed = false;
}