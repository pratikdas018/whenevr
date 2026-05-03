const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

export default function Calendar() {
  return (
    <div className="w-full max-w-[392px] rounded-[28px] border border-white/20 bg-[#171717] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <p className="text-[2rem] font-semibold text-white">May 2026</p>

      <div className="mt-4 grid grid-cols-7 gap-y-4 border-t border-white/20 pt-4">
        {weekDays.map((day) => (
          <span
            key={day}
            className="text-center text-base font-bold text-white/85"
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

          const isSelected = day === 6;

          return (
            <div
              key={day}
              className={`flex h-12 items-center justify-center rounded-xl text-lg font-semibold ${
                isSelected
                  ? "bg-[#F4F4F2] text-[#111111]"
                  : "text-white/90"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
