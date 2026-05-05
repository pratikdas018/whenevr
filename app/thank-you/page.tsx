export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-center">
        <p className="mb-6 rounded-full bg-gray-200 px-4 py-1 text-sm">
          Thank you for your purchase
        </p>

        <h1 className="max-w-3xl text-[64px] font-semibold leading-[1.1] text-black">
          We&apos;re ready
          <br />
          when <span className="font-serif italic">you</span> are.
        </h1>

        <p className="mt-6 max-w-xl text-gray-600">
          Your purchase is confirmed and your next project is one step closer
          to done.
        </p>

        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-left shadow-sm">
            <h3 className="mb-2 font-semibold text-black">Check your email</h3>
            <p className="text-sm text-gray-500">
              You&apos;ll find a welcome message with everything you need to get
              started.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-left shadow-sm">
            <h3 className="mb-2 font-semibold text-black">
              Submit your first request
            </h3>
            <p className="text-sm text-gray-500">
              Head to your dashboard and send your first task.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-left shadow-sm">
            <h3 className="mb-2 font-semibold text-black">
              Reach out if you need
            </h3>
            <p className="text-sm text-gray-500">
              We&apos;re here to help anytime you need support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
