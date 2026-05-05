"use client";

import { useMemo, useState } from "react";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const times = ["4:15pm", "5:00pm", "6:30pm"];
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

export default function BookingFlow() {
  const [selectedDate, setSelectedDate] = useState<number | null>(11);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"calendar" | "form" | "success">(
    "calendar",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const canConfirm = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0;
  }, [email, name]);

  return (
    <div className="w-full max-w-[380px] rounded-[26px] border border-white/8 bg-black p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300">
      <div className="min-h-[500px]">
        {step === "calendar" && (
          <div className="animate-in fade-in duration-300">
            <h2 className="mb-4 text-lg font-medium">May 2026</h2>

            <div className="mb-3 grid grid-cols-7 gap-2 text-center text-[11px] tracking-[0.12em] text-white/45">
              {weekDays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="mb-6 grid grid-cols-7 gap-2 text-center">
              {calendarCells.map((day, index) => {
                if (!day) {
                  return <div key={`empty-${index}`} className="h-11" />;
                }

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDate(day)}
                    className={`rounded-lg p-2 text-sm font-medium transition-all duration-200 ${
                      selectedDate === day
                        ? "bg-white text-black"
                        : "bg-neutral-800 text-white hover:bg-neutral-700"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mb-4 text-lg font-medium">Wed {selectedDate}</div>

            <div className="flex flex-wrap gap-3">
              {times.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => {
                    setSelectedTime(time);
                    setStep("form");
                  }}
                  className="rounded-xl border border-white/70 px-4 py-2 text-sm transition-all duration-200 hover:bg-white hover:text-black"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="animate-in fade-in duration-300">
            <div className="mb-6">
              <p className="text-sm text-white/45">Booking</p>
              <h3 className="mt-1 text-lg font-medium">Enter Details</h3>
              <p className="mt-2 text-sm text-white/55">
                May {selectedDate} at {selectedTime}
              </p>
            </div>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="mb-3 w-full rounded-xl border border-neutral-700 bg-neutral-900 p-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white/40"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              type="email"
              className="mb-4 w-full rounded-xl border border-neutral-700 bg-neutral-900 p-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white/40"
            />

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep("calendar")}
                className="text-sm text-white/60 transition hover:text-white"
              >
                Back
              </button>

              <button
                type="button"
                onClick={() => {
                  if (canConfirm) {
                    setStep("success");
                  }
                }}
                disabled={!canConfirm}
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-40 hover:opacity-90"
              >
                Confirm
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="animate-in fade-in duration-300">
            <h2 className="mb-4 text-xl font-medium">
              Your booking has been submitted
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Demo meeting scheduled successfully.
            </p>

            <div className="space-y-2 text-sm text-white/75">
              <p>
                <b className="text-white">When:</b> May {selectedDate}
              </p>
              <p>
                <b className="text-white">Time:</b> {selectedTime}
              </p>
              <p>
                <b className="text-white">Name:</b> {name}
              </p>
              <p>
                <b className="text-white">Email:</b> {email}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setStep("calendar");
                setSelectedTime(null);
                setName("");
                setEmail("");
              }}
              className="mt-8 rounded-xl border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
            >
              Book another time
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
