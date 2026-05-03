"use client";

import Link from "next/link";
import { useState } from "react";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const availableSlots: Record<number, string[]> = {
  6: ["4:15pm", "5:00pm", "6:30pm"],
  7: ["11:30am", "1:00pm", "4:45pm"],
  8: ["10:15am", "12:30pm", "3:45pm"],
  11: ["12:00pm", "2:15pm", "5:30pm"],
  12: ["11:00am", "1:45pm", "6:00pm"],
  13: ["9:30am", "2:00pm", "4:30pm"],
  14: ["10:00am", "12:15pm", "5:15pm"],
  15: ["11:45am", "3:00pm", "6:15pm"],
  18: ["10:30am", "1:15pm", "4:00pm"],
  19: ["9:45am", "12:45pm", "5:00pm"],
  20: ["11:15am", "2:30pm", "6:00pm"],
  21: ["10:45am", "1:30pm", "4:45pm"],
  22: ["9:15am", "12:00pm", "3:15pm"],
  25: ["10:00am", "2:15pm", "5:45pm"],
  26: ["11:30am", "1:00pm", "4:15pm"],
  27: ["9:00am", "12:30pm", "3:30pm"],
  28: ["10:15am", "2:45pm", "5:15pm"],
  29: ["11:00am", "1:15pm", "4:30pm"],
};

const calendarCells = [
  null,
  null,
  null,
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const dayLabels: Record<number, string> = {
  6: "Wed 06",
  7: "Thu 07",
  8: "Fri 08",
  11: "Mon 11",
  12: "Tue 12",
  13: "Wed 13",
  14: "Thu 14",
  15: "Fri 15",
  18: "Mon 18",
  19: "Tue 19",
  20: "Wed 20",
  21: "Thu 21",
  22: "Fri 22",
  25: "Mon 25",
  26: "Tue 26",
  27: "Wed 27",
  28: "Thu 28",
  29: "Fri 29",
};

function to24HourLabel(label: string) {
  const match = label.match(/^(\d{1,2}):(\d{2})(am|pm)$/);
  if (!match) return label;

  const [, hourString, minute, meridiem] = match;
  let hour = Number(hourString);

  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

export default function BookCallSection() {
  const [selectedDay, setSelectedDay] = useState(6);
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [selectedTime, setSelectedTime] = useState(availableSlots[6][0]);

  const currentSlots = availableSlots[selectedDay] ?? [];
  const displayTime =
    timeFormat === "24h" ? to24HourLabel(selectedTime) : selectedTime;

  const handleDaySelect = (day: number) => {
    const nextSlots = availableSlots[day];
    if (!nextSlots) return;

    setSelectedDay(day);
    setSelectedTime(nextSlots[0]);
  };

  return (
    <section
      id="book-a-call"
      className="bg-[#050505] px-6 py-24 text-[#F5F0E8] md:min-h-screen md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[minmax(0,1fr)_390px] md:items-start md:gap-16">
        <div className="max-w-[760px] pt-4">
          <h2
            className="tracking-[-0.06em] text-white"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "clamp(3.6rem, 7vw, 5.8rem)",
              fontWeight: 700,
              lineHeight: 0.92,
            }}
          >
            Design{" "}
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              doesn&apos;t
            </span>{" "}
            need
            <br />
            to be complicated.
          </h2>

          <p
            className="mt-8 max-w-[620px] text-lg leading-[1.5] text-white/45"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Book a quick call and get a clear look at how Whenevr works,
            what&apos;s included, and whether it fits your pace.
          </p>

          <Link
            href="#pricing"
            className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-[1.05rem] font-semibold text-[#0A0A0A] transition-transform duration-200 hover:scale-[1.02]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            See Pricing
          </Link>
        </div>

        <div className="rounded-[28px] border border-white/6 bg-[#171717] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <p
            className="text-xl font-semibold text-white/12"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            May 2026
          </p>

          <div className="mt-4 grid grid-cols-7 gap-y-4 border-t border-white/8 pt-4">
            {weekDays.map((day) => (
              <span
                key={day}
                className="text-center text-[0.95rem] font-bold tracking-[0.08em] text-white/80"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {day}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-7 gap-4">
            {calendarCells.map((day, index) => {
              if (!day) {
                return <div key={`empty-${index}`} className="h-12" />;
              }

              const isSelected = day === selectedDay;
              const isAvailable = Boolean(availableSlots[day]);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDaySelect(day)}
                  disabled={!isAvailable}
                  className={`flex h-12 items-center justify-center rounded-xl text-lg font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#F4F4F2] text-[#111111]"
                      : isAvailable
                        ? "bg-white/14 text-white/90 hover:bg-white/22"
                        : "bg-transparent text-white/38"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  aria-pressed={isSelected}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p
              className="text-[1.9rem] font-bold text-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {dayLabels[selectedDay]}
            </p>
            <div className="flex items-center gap-2">
              {(["12h", "24h"] as const).map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => setTimeFormat(format)}
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                    timeFormat === format
                      ? "border border-white/10 bg-[#0E0E0E] text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  aria-pressed={timeFormat === format}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {currentSlots.map((slot) => {
              const slotLabel =
                timeFormat === "24h" ? to24HourLabel(slot) : slot;
              const isSelected = selectedTime === slot;

              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-2xl border px-4 py-3 text-center text-lg font-semibold transition-colors ${
                    isSelected
                      ? "border-white/18 bg-[#F4F4F2] text-[#111111]"
                      : "border-white/12 bg-[#121212] text-white/90 hover:bg-white/10"
                  }`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  aria-pressed={isSelected}
                >
                  {slotLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/12 bg-[#121212] px-5 py-4 text-center">
            <span
              className="text-2xl font-semibold text-white/90"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Selected: {displayTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
