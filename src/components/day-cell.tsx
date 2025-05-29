type DayCellProps = {
  day: Date;
};

export default function DayCell({ day }: DayCellProps) {
  return <div>{day.toISOString()}</div>;
}
