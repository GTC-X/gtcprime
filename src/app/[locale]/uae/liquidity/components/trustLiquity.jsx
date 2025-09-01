import React from "react";
export default function TrustedLiquidity({ country = "[COUNTRY]" }) {
    const items = [
        { title: "Multi‑ Jurisdictional Regulation", icon: "shield", img: "/prime/card-icon1.svg" },
        { title: "No Hidden Terms", icon: "dot", img: "/prime/card-icon2.svg" },
        { title: "No Equity Confusion", icon: "ban", img: "/prime/card-icon3.png" },
        { title: "Get Your Margin Bonus", icon: "star", img: "/prime/card-icon4.svg" },
    ];
    return (
        <section className="relative overflow-hidden bg-white">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: "url('/prime/bg-trust.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 80%",
                    backgroundPosition: "center",
                    filter: "contrast(90%) brightness(110%)",
                }}
            />

            <div className="mx-auto max-w-6xl  relative z-10 container px-6 pt-14 pb-16 md:pt-16 md:pb-20 text-center">
                <h2 className="text-[28px] md:text-[38px] font-extrabold leading-[1.15] tracking-tight text-[#03A7D9]">
                    Trusted Liquidity. Proven Reputation.
                </h2>

                <p className="mx-auto mt-4 max-w-[880px] text-[15px] md:text-[18px] leading-[26px] text-[#003651]">
                    When you're choosing a liquidity partner, trust matters. That's why brokers across {country} and beyond turn to GTC Prime, a regulated liquidity provider with a rock‑solid reputation and decades of combined industry expertise.
                </p>

                <div className="mt-12 grid  grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 md:gap-6">
                    {items.map((it, idx) => (
                        <div
                            key={idx}
                            className="min-h-[200px] rounded-[16px] bg-white ring-1 ring-[#E9EEF7]/80"
                            style={{
                                boxShadow: "1px 6px 16px 0px #0000001A"
                            }}
                        >
                            <div className="flex h-full flex-col max-w-[210px]  md:max-w-[170px] mx-auto items-center justify-center px-4 py-8">
                                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full  text-white">
                                    <img src={it?.img} alr="" />
                                </div>
                                <p className="px-4 text-center text-[16px] font-medium leading-[24px] text-[#04417B]">
                                    {it.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-12 max-w-[980px] text-[18px] md:text-[22px] font-medium leading-[24px] md:leading-[30px] text-[#03A7D9]">
                    From real trader bonuses to marketing support and instant payouts, this is the Partner programme serious partners are switching to.
                </p>

                <div className="mt-12">
                    <a
                        href="#book"
                        className="inline-flex  w-full sm:w-fit items-center justify-center rounded-[8px] bg-[#ED8946] px-5 py-3 text-[14px] font-semibold text-white shadow-md transition hover:bg-[#ED8946] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ED8946] focus:ring-offset-2"
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
        </section >
    );
}