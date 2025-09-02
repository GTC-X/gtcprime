import React from "react";

export default function GTCPrimeHero({setIsOpen}) {
    const items = [
        { label: "Tier-1 Liquidity,\nAlways On", icon: "droplet" },
        { label: "Ultra-Low Latency\nExecution", icon: "arrow" },
        { label: "FIX API & Bridge\nReady", icon: "plus" },
        { label: "24/5 Dedicated\nPrime Support", icon: "support" },
        { label: "Flexible Margin\nSolutions", icon: "snow" },
        { label: "Multi-Regulated &\nTrusted", icon: "shield" },
    ];

    const Icon = ({ type }) => {
        switch (type) {
            case "droplet":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <rect width="20" height="20" transform="translate(0.666748)" fill="#FEFEFE" />
                        <path d="M14.1457 3.8328C13.1887 2.72754 12.1121 1.73187 10.9355 0.864051C10.8567 0.808925 10.7629 0.779358 10.6667 0.779358C10.5706 0.779358 10.4768 0.808925 10.398 0.864051C9.22145 1.73187 8.14481 2.72754 7.18784 3.8328C5.06831 6.2703 3.948 8.83514 3.948 11.25C3.948 13.0319 4.65586 14.7409 5.91587 16.0009C7.17588 17.2609 8.88482 17.9687 10.6667 17.9687C12.4487 17.9687 14.1576 17.2609 15.4176 16.0009C16.6776 14.7409 17.3855 13.0319 17.3855 11.25C17.3855 8.83514 16.2652 6.2703 14.1457 3.8328ZM10.6667 17.0312C9.13404 17.0294 7.66463 16.4197 6.58084 15.3359C5.49705 14.2521 4.88736 12.7827 4.8855 11.25C4.8855 6.59218 9.49487 2.73983 10.6667 1.83514C11.8386 2.73983 16.448 6.59218 16.448 11.25C16.4461 12.7827 15.8364 14.2521 14.7527 15.3359C13.6689 16.4197 12.1995 17.0294 10.6667 17.0312ZM14.8792 11.9531C14.7229 12.8266 14.3028 13.6312 13.6754 14.2586C13.0479 14.886 12.2433 15.3062 11.3699 15.4625C11.344 15.4664 11.3179 15.4685 11.2917 15.4687C11.1739 15.4692 11.0602 15.4253 10.9733 15.3457C10.8864 15.266 10.8326 15.1566 10.8228 15.0392C10.8129 14.9217 10.8477 14.8049 10.9201 14.7119C10.9925 14.6189 11.0973 14.5567 11.2136 14.5375C12.5714 14.3094 13.7238 13.1562 13.9542 11.7969C13.975 11.6742 14.0436 11.5648 14.145 11.4927C14.1952 11.457 14.2519 11.4316 14.3119 11.4178C14.372 11.404 14.4341 11.4022 14.4949 11.4125C14.5556 11.4227 14.6137 11.4449 14.6659 11.4776C14.7181 11.5103 14.7633 11.553 14.799 11.6032C14.8347 11.6534 14.8602 11.7101 14.8739 11.7702C14.8877 11.8302 14.8895 11.8924 14.8792 11.9531Z" fill="#03A7D9" />
                    </svg>
                );
            case "arrow":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 7L12 13L6 7M6 17H18" stroke="#03A7D9" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                );
            case "plus":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 7L17.5 10.5M7.5 13.5L11 17M11 7L7.5 10.5M17.5 13.5L14 17" stroke="#03A7D9" stroke-linecap="round" />
                        <path d="M12.5 7.5C13.6046 7.5 14.5 6.60457 14.5 5.5C14.5 4.39543 13.6046 3.5 12.5 3.5C11.3954 3.5 10.5 4.39543 10.5 5.5C10.5 6.60457 11.3954 7.5 12.5 7.5Z" stroke="#03A7D9" />
                        <path d="M12.5 20.5C13.6046 20.5 14.5 19.6046 14.5 18.5C14.5 17.3954 13.6046 16.5 12.5 16.5C11.3954 16.5 10.5 17.3954 10.5 18.5C10.5 19.6046 11.3954 20.5 12.5 20.5Z" stroke="#03A7D9" />
                        <path d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z" stroke="#03A7D9" />
                        <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke="#03A7D9" />
                    </svg>
                );
            case "support":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M10.5 13.5714C10.2064 13.5715 9.91916 13.4896 9.67398 13.3357C9.4288 13.1818 9.23644 12.9627 9.12075 12.7057C8.87875 12.6513 8.64054 12.5826 8.4075 12.5L8.39475 12.4957C7.71043 12.2511 7.07881 11.8894 6.531 11.4286C5.79704 10.8119 5.23261 10.0337 4.88693 9.16163C4.54125 8.28959 4.42481 7.35024 4.54776 6.42551C4.67071 5.50077 5.02932 4.61872 5.59233 3.85626C6.15533 3.09381 6.90563 2.47409 7.77781 2.05115C8.64999 1.62822 9.61756 1.4149 10.5962 1.42981C11.5748 1.44471 12.5347 1.68738 13.3922 2.13666C14.2497 2.58594 14.9789 3.22819 15.516 4.0074C16.0531 4.78662 16.3819 5.67914 16.4738 6.60715C16.503 6.90215 16.2487 7.14286 15.9375 7.14286C15.627 7.14286 15.3788 6.90215 15.3428 6.60786C15.2436 5.79593 14.9211 5.02331 14.4079 4.36812C13.8948 3.71292 13.209 3.19838 12.4201 2.87649C11.6312 2.5546 10.767 2.43679 9.91494 2.53495C9.06287 2.63311 8.25312 2.94378 7.56754 3.43554C6.88195 3.9273 6.34484 4.58273 6.01049 5.33556C5.67615 6.0884 5.55642 6.91196 5.66342 7.72299C5.77041 8.53402 6.10033 9.30377 6.61983 9.95444C7.13933 10.6051 7.82999 11.1136 8.622 11.4286L8.652 11.4407C8.802 11.4993 8.956 11.551 9.114 11.5957C9.25848 11.2605 9.53135 10.99 9.87735 10.8392C10.2233 10.6883 10.6166 10.6684 10.9775 10.7833C11.3384 10.8983 11.6399 11.1396 11.8209 11.4583C12.002 11.777 12.0491 12.1494 11.9528 12.5C11.8696 12.8067 11.6818 13.0784 11.4188 13.2724C11.1558 13.4663 10.8326 13.5715 10.5 13.5714ZM5.25 12.5H6.12675C5.70743 12.1887 5.32561 11.8342 4.98825 11.4429C4.44054 11.504 3.93545 11.7545 3.56892 12.1469C3.20239 12.5393 2.99993 13.0462 3 13.5714V14.0821C3 16.7379 6.1575 18.5714 10.5 18.5714C14.8425 18.5714 18 16.6371 18 14.0821V13.5714C18 13.0031 17.7629 12.4581 17.341 12.0562C16.919 11.6543 16.3467 11.4286 15.75 11.4286H13.0162C13.1249 11.7758 13.1531 12.1414 13.0988 12.5H15.75L15.8588 12.505C16.137 12.5307 16.3952 12.6542 16.5831 12.8514C16.7709 13.0485 16.875 13.3052 16.875 13.5714V14.0821L16.8713 14.1971C16.7663 15.9971 14.1945 17.5 10.5 17.5C6.66675 17.5 4.125 15.9921 4.125 14.0821V13.5714L4.13025 13.4679C4.15727 13.2029 4.28692 12.957 4.49392 12.778C4.70092 12.5991 4.97046 12.5 5.25 12.5ZM14.25 7.14286C14.2501 7.78985 14.0657 8.42471 13.7164 8.97964C13.3672 9.53457 12.8662 9.98872 12.267 10.2936C11.7836 9.87475 11.1535 9.64272 10.5 9.64286C10.8447 9.64286 11.1861 9.5782 11.5045 9.45256C11.823 9.32692 12.1124 9.14277 12.3562 8.91063C12.5999 8.67848 12.7933 8.40288 12.9252 8.09957C13.0571 7.79626 13.125 7.47117 13.125 7.14286C13.125 6.81456 13.0571 6.48947 12.9252 6.18615C12.7933 5.88284 12.5999 5.60724 12.3562 5.37509C12.1124 5.14295 11.823 4.9588 11.5045 4.83316C11.1861 4.70753 10.8447 4.64286 10.5 4.64286C9.80381 4.64286 9.13613 4.90625 8.64384 5.37509C8.15156 5.84393 7.875 6.47982 7.875 7.14286C7.875 7.8059 8.15156 8.44179 8.64384 8.91063C9.13613 9.37947 9.80381 9.64286 10.5 9.64286C9.819 9.64286 9.1995 9.89 8.73375 10.2943C8.13487 9.98967 7.63405 9.53591 7.28475 8.98143C6.98735 8.50956 6.80848 7.97861 6.7621 7.43003C6.71572 6.88145 6.80309 6.33009 7.01738 5.81897C7.23168 5.30786 7.56711 4.85083 7.99748 4.48356C8.42785 4.11629 8.94152 3.84871 9.4984 3.70171C10.0553 3.55472 10.6403 3.53228 11.2078 3.63616C11.7753 3.74003 12.3099 3.96741 12.7699 4.30053C13.2298 4.63366 13.6028 5.06352 13.8595 5.55657C14.1163 6.04962 14.2499 6.59251 14.25 7.14286Z" fill="#03A7D9" />
                    </svg>
                );
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M9.08337 10.3688L7.46462 8.75L6.58337 9.63125L9.08337 12.1312L14.0834 7.13125L13.2021 6.25L9.08337 10.3688Z" fill="#03A7D9" />
                        <path d="M10.3334 18.75L6.47338 16.6919C5.37287 16.1066 4.45257 15.2325 3.81128 14.1637C3.16998 13.0948 2.83192 11.8715 2.83338 10.625V2.5C2.83338 2.16848 2.96507 1.85054 3.1995 1.61612C3.43392 1.3817 3.75186 1.25 4.08338 1.25H16.5834C16.9149 1.25 17.2328 1.3817 17.4673 1.61612C17.7017 1.85054 17.8334 2.16848 17.8334 2.5V10.625C17.8348 11.8715 17.4968 13.0948 16.8555 14.1637C16.2142 15.2325 15.2939 16.1066 14.1934 16.6919L10.3334 18.75ZM4.08338 2.5V10.625C4.08268 11.6448 4.35955 12.6456 4.8843 13.52C5.40905 14.3945 6.1619 15.1096 7.06213 15.5887L10.3334 17.3331L13.6046 15.5894C14.505 15.1102 15.2579 14.3949 15.7826 13.5204C16.3074 12.6458 16.5842 11.6449 16.5834 10.625V2.5H4.08338Z" fill="#03A7D9" />
                    </svg>
                );
        }
    };

    return (
        <section className="relative bg-white md:overflow-visible overflow-x-hidden">
            <div
                className="pointer-events-none hidden md:block absolute right-0 top-0 h-full w-[600px] "
                style={{
                    backgroundImage: "url('/prime/banner.png')",
                    backgroundSize: "620px auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                }}
            />
            <div className="container mx-auto">
                <div className="py-6 flex justify-center md:justify-center">
                    <img src="/prime/logo.png" alt="GTC Prime" className="h-12 w-auto" />
                </div>
                <div className="grid grid-cols-12 items-center gap-8 md:gap-10 pt-10 md:pt-12">
                    <div className="col-span-12 lg:col-span-7 xl:col-span-6 text-center  md:text-left">
                         <h2 className="mt-1 text-[#04417B] font-extrabold  text-4xl md:text-[60px] break-word md:break-normal leading-tight">
                            Do You Need a
                        </h2>

                        <h1 className="font-extrabold leading-[1.05] uppercase tracking-tight text-[#03A7D9] text-[40px] md:text-[60px] break-word md:break-normal">
                            Liquidity Provider?
                        </h1>

                       
                        <p className="text-[28px] md:text-[30px] font-[300] text-[#5D6973] break-all md:break-normal">
                            Read on...  
                        </p>

                        <div className="-mr-[16px] sm:-mr-[25px]">
                            <img
                                src="/prime/bg-mobile.png"
                                alt=""
                                className=" block w-full max-w-[520px] h-auto object-contain mx-auto md:hidden"
                            />
                        </div>

                        <p className="md:mt-5 -mt-5 md:max-w-[560px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] text-[#5D6973] break-word md:break-normal">
                            Access deep multi-asset liquidity, tier-1 pricing, ultra-low latency execution, no hidden fees &amp; FIX API all under one roof with GTC Prime.
                        </p>

                        <div className="mt-7">
                            <a
                                href="#book"
                                onClick={() => setIsOpen(true)}
                                className="inline-flex w-full sm:w-fit items-center justify-center rounded-[12px] bg-[#ED8946] px-5 py-3 text-[15px] font-semibold text-white shadow-md transition hover:bg-[#E67D00] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:ring-offset-2"
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


                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 rounded-none bg-transparent mt-10 pb-12">
                    {items?.map((it, idx) => (
                        <div key={idx} className="relative flex flex-col items-center justify-start px-3 md:px-4 py-6">
                            {idx !== items.length - 1 && (
                                <span aria-hidden className="absolute right-0 top-1/2 hidden md:block h-12 w-px -translate-y-1/2 bg-[#DDE6F2]" />
                            )}

                            <div className="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-[#10B6C6] text-[#10B6C6]">
                                <Icon type={it.icon} />
                            </div>

                            <p
                                className="mt-3 max-w-[170px] text-center text-[14px] md:text-[15px] font-medium leading-[18px] whitespace-pre-line break-all md:break-words text-[#04417B]"
                                style={{ hyphens: "auto" }}
                            >
                                {it.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
