import { MonthSection } from "./MonthSection";
import { CalendarHeaderSection } from "./CalendarHeaderSection";
import { CalendarContextWrapper } from "./CalendarContextWrapper";
import { buildClient } from "@/libs/supabase/server";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";
import { getTodosByUserIdService } from "@/services/applications/todos/getTodosByUserIdService";
import { todoRepository } from "@/infrastructures/repositories/applications/todos/todoRepository";

const fetchAllTodos = async (id: string) => {
  return await getTodosByUserIdService(id, todoRepository());
};

export const CalendarSection = async () => {
  const supabase = await buildClient();
  const user = await fetchAuthUser(supabase);
  const todos = user ? await fetchAllTodos(user.id) : [];

  return (
    <section>
      <CalendarContextWrapper allTodos={todos}>
        <CalendarHeaderSection />
        <MonthSection />
      </CalendarContextWrapper>
    </section>
  );
};
