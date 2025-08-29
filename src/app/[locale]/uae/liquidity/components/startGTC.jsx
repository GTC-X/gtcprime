import React from "react";

export default function StartWithGTCPrime() {
  const cards = [
    {
      title: `<span class="font-[600]">Free Institutional Price Feed </span> to get you off the ground`,
      tint: "from-[#03A7D9] to-[#03A7D9]",
      background: "/prime/card1.jpg"
    },
    {
      title: `<span class="font-[600]">Deep Liquidity on a Host of Asset Classes </span> Like FX, Metals, Indices & More`,
      tint: "from-[#04417B] to-[#04417B]",
      background: "/prime/card2.jpg"
    },
    {
      title: `<span class="font-[600]">Flexible Margin & Credit Terms </span> that scale with you`,
      tint: "from-[#003651] to-[#003651]",
      background: "/prime/card3.jpg"
    },
    {
      title: `<span class="font-[600]">Direct Access to Real People </span> when you need help`,
      tint: "from-[#03A7D9] to-[#03A7D9]",
      background: "/prime/card4.jpg"
    },
    {
      title: `<span class="font-[600]">Setup Support Across Platform Integrations </span> and backend systems`,
      tint: "from-[#04417B] to-[#04417B]",
      background: "/prime/card5.jpg"
    },
    {
      title: `<span class="font-[600]">Ongoing Strategic Guidance </span> to help you scale your operations smartly`,
      tint: "from-[#003651] to-[#003651]",
      background: "/prime/card6.jpg"
    },
  ];

  return (
    <section className="relative bg-[#F2F6F9] overflow-x-hidden">
      <div className="mx-auto container px-4 sm:px-6 pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <p className="uppercase tracking-[0.35em] text-[22px]  md:text-[24px] text-[#003651]">
              Starting a Brokerage?
            </p>
            <h2 className="mt-3 font-extrabold leading-[1.05] text-[#03A7D9] text-[48px] md:text-[48px]">
              START WITH
              <br />
              GTC PRIME
            </h2>
            <p className="mt-4 text-[16px] leading-[22px] sm:leading-[24px] text-[#003651] max-w-[360px]">
              If you're launching your own FX or multi-asset brokerage, we're the liquidity partner you want by your side. GTC Prime gives startup brokers the tools to grow fast:
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((c, i) => {
                const staggerDown = i === 1 ? "md:mt-[3.125rem]" : "";
                const staggerUp = (i === 2 || i === 4) ? "md:-mt-[3.125rem]" : "";

                return (
                  <div
                    key={i}
                    className={`${staggerDown} ${staggerUp} relative h-[12.75rem] sm:h-[13.5rem] md:h-[14.25rem] rounded-[18px] bg-gradient-to-b ${c.tint} p-[16px] sm:p-[18px] text-white shadow-[0_10px_20px_rgba(16,38,87,0.18)] overflow-hidden isolate`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${c.background})` }}
                    />

                    <div className="relative z-10 h-full flex justify-center items-end">
                      <p
                        className="px-2 text-[18px] md:text-[20px] text-center font-[400] leading-[24px] sm:leading-[28px] md:leading-[30px]"
                        dangerouslySetInnerHTML={{ __html: c.title }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="mx-auto text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#04417B]">
            You don’t need to go it alone. GTC Prime helps you build it right from day one.
          </p>
          <a
            href="#book"
            className="mt-5 inline-flex w-full md:w-fit items-center justify-center rounded-[12px] bg-[#04417B] px-5 py-3 text-[14px] font-semibold text-white shadow-md transition hover:bg-[#04417B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#04417B] focus:ring-offset-2"
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
