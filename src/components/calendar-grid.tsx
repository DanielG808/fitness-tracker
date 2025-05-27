import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React from "react";
import DayCell from "./day-cell";

export default function CalendarGrid() {
  const now = new Date();
  const currentMonth = now;

  const start = startOfWeek(startOfMonth(currentMonth));
  const end = endOfWeek(endOfMonth(currentMonth));
  const days = eachDayOfInterval({ start, end });

  return (
    <section>
      <h2 className="text-xl font-bold text-center">
        {format(currentMonth, "MMMM yyyy")}
      </h2>

      <div className="grid grid-cols-7 text-center font-medium text-gray-500">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((day) => (
          <DayCell day={day} />
        ))}
      </div>
    </section>
  );
}
