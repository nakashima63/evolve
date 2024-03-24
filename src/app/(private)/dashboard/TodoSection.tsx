import { TodoIndexDtoInterface } from "@/dtos/dashboards/TodoIndexDto";
import { TodoTable } from "@/components/organisms/dashboards/TodoTable";

interface Props {
  todos: TodoIndexDtoInterface[];
}

export const TodoSection = ({ todos }: Props) => {
  return (
    <section>
      <TodoTable todos={todos} />
    </section>
  );
};
