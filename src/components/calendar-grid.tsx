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
import { cn } from "@/lib/utils/cn";

export default function CalendarGrid() {
  const now = new Date();
  const currentMonth = now;

  const start = startOfWeek(startOfMonth(currentMonth));
  const end = endOfWeek(endOfMonth(currentMonth));
  const days = eachDayOfInterval({ start, end });

  return (
    <section>
      <h2 className="text-xl font-bold text-center my-2">
        {format(currentMonth, "MMMM yyyy")}
      </h2>

      <div className="grid grid-cols-7 border border-t-0 border-black/15 text-center font-medium text-gray-500 my-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((day) => (
          <DayCell key={day.toISOString()} day={day} />
        ))}
      </div>
    </section>
  );
}
