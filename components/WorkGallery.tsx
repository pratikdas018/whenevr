import Image from "next/image";

const works = [
  "https://framerusercontent.com/images/UK3ji9XKftVKablDa07xbZ7o.jpeg",
  "https://framerusercontent.com/images/gdoBqgMU9ke6K07ShZLmpfUoWc.jpeg",
  "https://framerusercontent.com/images/ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpeg",
  "https://framerusercontent.com/images/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg",
  "https://framerusercontent.com/images/oIZS8mYhVbr1mWW249pW69Cqs.jpeg",
  "https://framerusercontent.com/images/PLq1ZlpB2PsLvsshgPjafwuzA.jpeg",
  "https://framerusercontent.com/images/4LHoTajbPsuxwmX9WgEagK5I.jpeg",
  "https://framerusercontent.com/images/5L6KoigpOpSnKvbf6HNxKNfWvu8.jpeg",
];

export default function WorkGallery() {
  return (
    <section className="bg-[#F5F0E8] py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Featured large images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {works.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-[#0a0a0a]/5 ${
                i === 0 ? "aspect-[3/4] md:col-span-2 md:row-span-2" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Design work ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 right-3">
                <span className="text-[10px] bg-[#F5F0E8]/80 backdrop-blur text-[#0a0a0a]/50 px-2 py-1 rounded-full">
                  Example content
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {works.slice(4).map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-2xl bg-[#0a0a0a]/5"
            >
              <Image
                src={src}
                alt={`Design work ${i + 5}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
