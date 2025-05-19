"use client"
import { Calendar as HCalendar } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function Calendar() {
  return (
    <HCalendar
      aria-label="Calendar"
      defaultValue={today(getLocalTimeZone())}
      className="scale-75"
    />
  )
}
