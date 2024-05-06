import { MonthSection } from "./MonthSection";
import { CalendarHeaderSection } from "./CalendarHeaderSection";
import { CalendarContextWrapper } from "./CalendarContextWrapper";
import { buildClient } from "@/libs/supabase/server";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";

const fetchAllTodos = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo?userId=${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );

  if (res.status === 200) {
    const data = await res.json();
    return data.todos;
  }
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
