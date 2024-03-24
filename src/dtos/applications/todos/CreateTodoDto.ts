import { TaskStatus } from "@/types/enums/Applications/todos/TaskStatus";
import { Prisma } from "@prisma/client";

export class CreateTodoDto implements Prisma.TodoCreateInput {
  readonly taskName?: string | undefined;
  readonly dueDate?: string | Date | null | undefined;
  readonly status?: TaskStatus | undefined;
  readonly note?: string | undefined;
  readonly application: Prisma.ApplicationCreateNestedOneWithoutTodosInput;
  readonly createdBy?: string | undefined;
  readonly updatedBy?: string | undefined;

  /**
   * @param {Prisma.TodoCreateInput} data
   * @prop {string} taskName
   * @prop {string | Date | null} dueDate
   * @prop {TaskStatus} status
   * @prop {string} note
   * @prop {Prisma.ApplicationCreateNestedOneWithoutTodosInput} application
   * @prop {string} createdBy
   * @prop {string} updatedBy
   */
  constructor(data: Prisma.TodoCreateInput) {
    this.taskName = data.taskName;
    this.dueDate = data.dueDate;
    this.status = data.status;
    this.note = data.note;
    this.application = data.application;
    this.createdBy = data.createdBy;
    this.updatedBy = data.updatedBy;
  }
}
