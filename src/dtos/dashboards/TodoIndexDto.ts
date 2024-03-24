import { TodoWithApplication } from "@/infrastructures/queryservices/dashboards/dashboardQueryService";
import { dateTimeFormat } from "@/utils/dateFormat";

/**
 * TODO一覧取得用DTOインターフェース
 * @prop {string} id
 * @prop {string} taskName
 * @prop {string} dueDate
 * @prop {string} companyName
 */
export interface TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: string;
  readonly companyName: string;
}

export class TodoIndexDto implements TodoIndexDtoInterface {
  readonly id: string;
  readonly taskName: string;
  readonly dueDate: string;
  readonly companyName: string;

  /**
   * @param {TodoWithApplication} data
   * @prop {string} id
   * @prop {string} taskName
   * @prop {Date} dueDate
   * @prop {string} companyName
   */
  constructor(data: TodoWithApplication) {
    this.id = data.id;
    this.taskName = data.taskName;
    this.dueDate = data.dueDate ? dateTimeFormat(data.dueDate) : "";
    this.companyName = data.application.companyName;
  }
}
