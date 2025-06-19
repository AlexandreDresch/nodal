import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/mini-calendar.css";
import { Card } from "../ui/card";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendar() {
  const [value, setValue] = useState<Value>(new Date());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange: CalendarProps["onChange"] = (newValue, _event) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card className="flex w-full h-full flex-col px-3 py-3">
        <Calendar
          onChange={handleChange}
          value={value}
          prevLabel={<ChevronLeft className="ml-1 size-6" />}
          nextLabel={<ChevronRight className="ml-1 size-6" />}
          view={"month"}
        />
      </Card>
    </div>
  );
}
