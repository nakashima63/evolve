import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props {
  month: string;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleReset: () => void;
}

export const CalendarHeader = ({
  month,
  handlePrevMonth,
  handleNextMonth,
  handleReset,
}: Props) => {
  return (
    <div className="px-2 flex items-center">
      <button onClick={() => handlePrevMonth()}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronLeft />
        </span>
      </button>
      <span className="text-xl">{month}</span>
      <button onClick={() => handleNextMonth()}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronRight />
        </span>
      </button>
      <button
        onClick={() => handleReset()}
        className="border rounded py-2 px-4 ml-5"
      >
        今日
      </button>
    </div>
  );
};
