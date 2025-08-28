import React from "react";
export default function BoostBrokerageHero() {
    return (
        <div className=" relative">
            <section className="relative overflow-hidden bg-[#F2F6F9]">
                <div className="mx-auto grid container grid-cols-12 items-center gap-6 px-6 pt-10 pb-10 md:gap-8 md:pt-14 md:pb-14">
                    <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7">
                        <p className="text-[18px] font-semibold leading-[1.25] text-[#04417B]">
                            Switch Your Liquidity To GTC Prime Today &
                        </p>
                        <h1 className="mt-[6px] text-[40px] md:text-[54px] lg:text-[58px] font-extrabold leading-[1.06] tracking-tight text-[#03A7D9]">
                            Boost Your Brokerage.
                        </h1>
                        <p className="mt-6 max-w-[620px] text-[16px] md:text-[15px] leading-[22px] text-[#003651]">
                            On our call with you, we’ll walk you through everything step by step. No pressure. No
                            surprises. Just straight answers on how we can support your brokerage, from pricing and
                            liquidity to onboarding and setup. Total transparency, total clarity.
                        </p>

                        <div className="mt-6">
                            <a
                                href="#switch"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#ED8946] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-[#ED8946] hover:shadow-[0_8px_18px_rgba(230,125,0,0.30)] focus:outline-none focus:ring-2 focus:ring-[#ED8946] focus:ring-offset-2"
                            >
                                Make the Switch
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

                    <div className=" col-span-12 h-[230px] md:col-span-5 md:h-[240px] lg:h-[260px]">
                        <img
                            src="/prime/cta-banner-end.png"
                            alt="Executive"
                            className="absolute right-2 bottom-0 z-10 top-0 w-auto h-full"
                        />

                        <div className="absolute right-[270px] top-[22px] h-[18px] w-[18px] rounded-full bg-white/50" />
                        <div className="absolute right-[260px] top-[46px] h-[10px] w-[10px] rounded-full bg-white/60" />
                    </div>
                </div>
            </section>
        </div>
    );
}
