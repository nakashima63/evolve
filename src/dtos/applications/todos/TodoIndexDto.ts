import { Todo } from "@prisma/client";
import { TaskStatus } from "@/types/enums/Applications/todos/TaskStatus";

export interface TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: Date | null;
  readonly status: TaskStatus;
  readonly note: string;
}

export class TodoIndexDto implements TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: Date | null;
  readonly status: TaskStatus;
  readonly note: string;

  /**
   * @param {Todo} data
   * @prop {string} id
   * @prop {string} taskName
   * @prop {Date} dueDate
   * @prop {status} status
   * @prop {string} note
   */
  constructor(data: Todo) {
    this.id = data.id;
    this.taskName = data.taskName;
    this.dueDate = data.dueDate;
    this.status = data.status;
    this.note = data.note;
  }
}
