import { Container } from "@/components/atoms/Container";
import { CalendarSection } from "./CalendarSection";

const CalendarPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1 className="mb-2">カレンダー</h1>
      </div>
      <CalendarSection />
    </Container>
  );
};

export default CalendarPage;
