import { TaskStatus } from "@/types/enums/Applications/todos/TaskStatus";
import { Prisma } from "@prisma/client";

export class UpdateTodoDto implements Prisma.TodoUpdateInput {
  readonly taskName?: string | undefined;
  readonly dueDate?:
    | string
    | Date
    | Prisma.NullableDateTimeFieldUpdateOperationsInput
    | null
    | undefined;
  readonly status?: TaskStatus | undefined;
  readonly note?: string | undefined;

  /**
   * @param {Prisma.TodoUpdateInput} data
   * @prop {string} taskName
   * @prop {string | Date | null} dueDate
   * @prop {TaskStatus} status
   * @prop {string} note
   * @prop {Prisma.ApplicationUpdateWithoutTodosInput} application
   */
  constructor(data: Prisma.TodoUpdateInput) {
    this.taskName =
      typeof data.taskName === "object" ? data.taskName.set : data.taskName;
    this.dueDate =
      typeof data.dueDate === "object" ? data.dueDate : data.dueDate;
    this.status =
      typeof data.status === "object" ? data.status.set : data.status;
    this.note = typeof data.note === "object" ? data.note.set : data.note;
  }
}
