import { Todo } from "@prisma/client";
import { TaskStatus } from "@/types/enums/Applications/todos/TaskStatus";
import { dateTimeFormat } from "@/utils/dateFormat";

/**
 * Todo一覧取得用DTOインターフェース
 * @prop {string} id
 * @prop {string} taskName
 * @prop {string} dueDate
 * @prop {TaskStatus} status
 * @prop {string} note
 */
export interface TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: string;
  readonly status: TaskStatus;
  readonly note: string;
}

export class TodoIndexDto implements TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: string;
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
    this.dueDate = data.dueDate ? dateTimeFormat(data.dueDate) : "";
    this.status = data.status;
    this.note = data.note;
  }
}
