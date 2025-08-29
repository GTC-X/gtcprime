'use client'
import GTCPrimeHero from "./components/banner"
import BoostBrokerageHero from "./components/boostBroker"
import SliderModalPrime from "./components/SliderModal"
import StartWithGTCPrime from "./components/startGTC"
import TrustedLiquidity from "./components/trustLiquity"
import { useState } from "react";
import Meta from "../../components/Meta"
const page = () => {
       const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title='Trusted Institutional Liquidity Provider | GTC Prime' description='Looking for a reliable institutional liquidity provider? GTC Prime delivers deep liquidity, ultra-fast execution & FIX API for brokers, funds & asset managers.'/>
            <GTCPrimeHero  setIsOpen={setIsOpen}   />
            <StartWithGTCPrime  setIsOpen={setIsOpen}   />
            <TrustedLiquidity  setIsOpen={setIsOpen}   />
            <BoostBrokerageHero  setIsOpen={setIsOpen}   />
            <SliderModalPrime  setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    )
}

export default page