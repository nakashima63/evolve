import { MonthSection } from "./MonthSection";
import { CalendarHeaderSection } from "./CalendarHeaderSection";
import { CalendarContextWrapper } from "./CalendarContextWrapper";

export const CalendarSection = () => {
  return (
    <section>
      <CalendarContextWrapper>
        <CalendarHeaderSection />
        <MonthSection />
      </CalendarContextWrapper>
    </section>
  );
};
