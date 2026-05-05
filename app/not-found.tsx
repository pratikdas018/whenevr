export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-6 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm">
          Page not found
        </p>

        <h1 className="mb-8 text-[56px] font-semibold leading-[1.1] text-black">
          This page didn&apos;t pass
          <br />
          the <span className="font-serif italic">design</span> review.
        </h1>

        <a
          href="/"
          className="inline-block rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}
