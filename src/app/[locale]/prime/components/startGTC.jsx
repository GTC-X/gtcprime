import React from "react";

export default function StartWithGTCPrime() {
  const cards = [
    {
      title: "Free Institutional Price Feed",
      sub: "to get you off the ground",
      tint: "from-[#18B7C9] to-[#0F83B2]",
    },
    {
      title: "Deep Liquidity on a Host of Asset Classes",
      sub: "Like FX, Metals, Indices & More",
      tint: "from-[#0E8FB9] to-[#0B3C68]",
    },
    {
      title: "Flexible Margin & Credit Terms",
      sub: "that scale with you",
      tint: "from-[#109FBE] to-[#0B4F7A]",
    },
    {
      title: "Direct Access to Real People",
      sub: "when you need help",
      tint: "from-[#0FB2C9] to-[#0A3F6A]",
    },
    {
      title: "Setup Support Across Platform Integrations",
      sub: "and backend systems",
      tint: "from-[#0F7FB0] to-[#0B2F59]",
    },
    {
      title: "Ongoing Strategic Guidance",
      sub: "to help you scale your operations smartly",
      tint: "from-[#0EA0BE] to-[#0A3A63]",
    },
  ];

  return (
    <section className="relative bg-[#F2F6F9]">
      <div className="mx-auto container px-6 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4">
            <p className="uppercase tracking-[0.35em] text-[24px] text-[#003651]">
              Starting a Brokerage?
            </p>
            <h2 className="mt-3 font-extrabold leading-[1.05] text-[#03A7D9] text-[34px] sm:text-[38px] md:text-[48px]">
              START WITH
              <br />
              GTC PRIME
            </h2>
            <p className="mt-5 text-[15px] leading-[24px] text-[#003651] max-w-[360px]">
              If you're launching your own FX or multi‑asset brokerage, we're the liquidity partner you want by your side. GTC Prime gives startup brokers the tools to grow fast:
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-8">
            <div className="mx-auto grid w-fit grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className={`relative h-[122px] w-[308px] rounded-[18px] bg-gradient-to-b ${c.tint} p-[18px] text-white shadow-[0_10px_20px_rgba(16,38,87,0.18)]`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
                    style={{
                      backgroundImage: "url('/images/candles-blue.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "130%",
                      backgroundPosition: i % 2 === 0 ? "-40px center" : "right -30px center",
                    }}
                  />

                  <div className="relative z-[1]">
                    <p className="text-[16px] font-semibold leading-tight">
                      {c.title}
                    </p>
                    {c.sub && (
                      <p className="mt-[6px] text-[13px] leading-snug text-white/90">
                        {c.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto text-[22px] font-semibold text-[#04417B]">
            You don’t need to go it alone. GTC Prime helps you build it right from day one.
          </p>
          <a
            href="#book"
            className="mt-5 inline-flex items-center justify-center rounded-[12px] bg-[#04417B] px-5 py-3 text-[14px] font-semibold text-white shadow-md transition hover:bg-[#04417B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#04417B] focus:ring-offset-2"
          >
            Book a Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
