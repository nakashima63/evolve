import { TodoIndexDtoInterface } from "@/dtos/dashboards/TodoIndexDto";
import { ApplicationIndexDtoInterface } from "@/dtos/dashboards/ApplicationIndexDto";

/**
 * @description ダッシュボードインターフェース
 *
 * @property {TodoIndexDtoInterface[]} todos TODOリスト
 * @property {ApplicationIndexDtoInterface[]} applications 応募情報リスト
 */
export interface DashboardInterface {
  todos: TodoIndexDtoInterface[];
  applications: ApplicationIndexDtoInterface[];
}
