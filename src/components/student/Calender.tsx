import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { EventItem } from "@/lib/types";
import { eventTypeColors } from "@/lib/helper";

const AppCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [dayEvents, setDayEvents] = useState<EventItem[]>([]);
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`/api/admin/event`);
        const data = await res.json();
        console.log({ data });
        if (data.success) {
          setEvents(data.events);
        }
      } catch (error) {
        console.log("Failed to fetch events", error);
      }
    };
    fetchEvents();
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Get previous month's last days to fill the grid
  const prevMonth = new Date(currentYear, currentMonth - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();
  const prevMonthDays = [];
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    prevMonthDays.push(daysInPrevMonth - i);
  }

  // Get current month days
  const currentMonthDays = [];
  for (let day = 1; day <= daysInMonth; day++) {
    currentMonthDays.push(day);
  }

  // Get next month's first days to complete the grid
  const totalCells = 42; // 6 rows × 7 days
  const remainingCells =
    totalCells - prevMonthDays.length - currentMonthDays.length;
  const nextMonthDays = [];
  for (let day = 1; day <= remainingCells; day++) {
    nextMonthDays.push(day);
  }

  interface NavigateMonthFn {
    (direction: number): void;
  }

  const navigateMonth: NavigateMonthFn = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentMonth + direction);
    setCurrentDate(newDate);
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const isSelected = (day: number) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const getEventTypeForDay = (day: number) => {
    const dateStr = new Date(currentYear, currentMonth, day).toLocaleDateString(
      "en-CA"
    );
    const event = events.find((e) => e.date.startsWith(dateStr));
    return event?.type || null;
  };

  const handleDateClick = (day: number | undefined, type: string) => {
    if (type === "current" && day !== undefined) {
      const clickedDate = new Date(currentYear, currentMonth, day);
      setSelectedDate(clickedDate);
      const clickedDateStr = new Date(
        currentYear,
        currentMonth,
        day
      ).toLocaleDateString("en-CA");
      const matched = events.filter((event) =>
        event.date.startsWith(clickedDateStr)
      );
      setDayEvents(matched);
    }
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  return (
    <div className="w-full max-w-md mx-auto  to-black/20 bg-gradient-to-tl from-white/20  rounded-4xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white px-6 pt-4 pb-1">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          <h2 className="text-xl font-semibold">
            {months[currentMonth]} {currentYear}
          </h2>

          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        {/* Selected date display */}
        {selectedDate ? (
          dayEvents.length > 0 ? (
            <div className="px-1 pb-2">
              <ul className="">
                {dayEvents.map((event) => (
                  <li
                    key={event.id}
                    className="bg-yellow-500/10 border border-yellow-300/20 text-yellow-100 p-1 text-center  rounded-2xl"
                  >
                    <h4 className="font-bold text-sm">{event.title}</h4>
                    <p className="text-xs">{event.description}</p>
                    <p className="text-[10px] italic text-yellow-200">
                      Type: {event.type}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // No event, show selected date box
            <div className="bg-gray-50/5 border border-cyan-200 rounded-lg p-1 text-center">
              <p className="text-sm text-gray-100">Selected Date</p>
              <p className="font-semibold text-gray-100">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          )
        ) : (
          // No date selected
          <button
            onClick={goToToday}
            className="flex items-center w-full text-center justify-center gap-2 text-lg bg-white/20 px-3 py-[0.8rem] rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <Calendar size={14} />
            Today
          </button>
        )}
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-cyan-200 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Previous month days */}
          {prevMonthDays.map((day, index) => (
            <button
              key={`prev-${index}`}
              className="h-8 w-8 text-gray-300 text-sm hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors duration-150"
              disabled
            >
              {day}
            </button>
          ))}

          {/* Current month days */}
          {currentMonthDays.map((day) => {
            const isEventDayType = getEventTypeForDay(day);

            let eventClass = "";
            if (isEventDayType && eventTypeColors[isEventDayType]) {
              eventClass = eventTypeColors[isEventDayType];
            }

            return (
              <button
                key={`current-${day}`}
                onClick={() => handleDateClick(day, "current")}
                className={`h-8 w-8 text-sm rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  isToday(day)
                    ? "bg-blue-500 text-white font-semibold shadow-md"
                    : isSelected(day)
                    ? "bg-purple-500 text-white font-medium shadow-md"
                    : eventClass ||
                      "text-cyan-200 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {day}
              </button>
            );
          })}

          {/* Next month days */}
          {nextMonthDays.map((day, index) => (
            <button
              key={`next-${index}`}
              className="h-8 w-8 text-gray-300 text-sm hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors duration-150"
              disabled
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCalendar;
