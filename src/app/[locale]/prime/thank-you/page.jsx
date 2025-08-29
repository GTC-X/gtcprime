"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function GTCPrimeThankYou({
    firstName = "[FIRST NAME]",
    email = "[EMAIL]",
}) {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [checked, setChecked] = useState(false); // Track if we've checked localStorage

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setChecked(true); // Mark check complete
        }

        return () => {
            localStorage.removeItem("user");
        };
    }, []);

    useEffect(() => {
        // Only redirect after checking
        if (checked && !user) {
            router.push("/");
        }
    }, [checked, user]);

    if (!checked) return null; // Don't render anything until we've checked
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div
                className="pointer-events-none hidden md:block absolute right-0 -top-[6%] h-full w-[650px] "
                style={{
                    backgroundImage: "url('/prime/thank-you.png')",
                    backgroundSize: "620px auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                }}
            />

            <div className="container mx-auto max-w-[1180px] px-5 md:px-10">
                <div className="py-6 flex justify-center md:justify-center">
                    <img src="/prime/logo.png" alt="GTC Prime" className="h-12 w-auto" />
                </div>
                <div className="relative grid grid-cols-12 items-start gap-8 md:pb-20 pt-4">
                    <div className="col-span-12 md:col-span-7 lg:col-span-6">
                        <h1 className="text-[24px] leading-[24px] font-extrabold text-[#03A7D9] md:text-[26px] md:leading-[34px]">
                            Thanks, {user?.first_name} for showing an interest in partnering with a liquidity provider that actually understands your needs.
                        </h1>

                        <div className="mt-4 space-y-5 text-[16px] leading-[20px] text-[#5D6973] md:leading-[24px]">
                            <p>
                                We’ve sent you an email to <span className="font-semibold">{user?.email}</span>. Go ahead and click on that link.
                            </p>
                            <p>
                                We’ve also added a booking link in the email, which allows you to book a call at your convenience.
                            </p>
                            <p>
                                Go ahead and check your spam or junk folder, just in case our email has crept in there. If the email we’ve sent you has made its way into your spam or junk folder, simply move it back into your inbox.
                            </p>

                            <div className="pt-10">
                                <p className="text-[20px] font-semibold leading-[22px] text-[#04417B]">Having trouble?</p>
                                <p className="mt-3 text-[16px]">Contact the GTC Prime team at +XXX XXXX XXXX or email{" "}
                                    <a href="mailto:support@gtcprime.com" className="underline decoration-[#04417B]/30 underline-offset-[3px] hover:text-[#04417B]">
                                        support@gtcprime.com
                                    </a>
                                </p>
                                <p className="mt-6">See you soon!<br />The GTC Prime Team</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 hidden md:block md:col-span-5 lg:col-span-6 min-h-[320px] md:min-h-[520px]" />
                </div>
            </div>

            <div className="md:hidden pointer-events-none overflow-hidden -mt-[50px]">
                <div className="-mr-[16px] sm:-mr-[25px]">
                    <img
                        src="/prime/thank-you-mobile.png"
                        alt=""
                        className=" block w-full max-w-[520px] h-auto object-contain mx-auto md:hidden"
                    />
                </div>
            </div>
        </section>
    );
}
