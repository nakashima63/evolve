interface Props {
  day: number;
  onClick: () => void;
}

export const Day = ({ day }: Props) => {
  return (
    <div className="w-20 h-20 border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        <p className={"text-sm p-1 my-1 text-center"}>{day}</p>
      </header>
    </div>
  );
};
