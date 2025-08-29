import GTCPrimeHero from "./components/banner"
import BoostBrokerageHero from "./components/boostBroker"
import SliderModalPrime from "./components/SliderModal"
import StartWithGTCPrime from "./components/startGTC"
import TrustedLiquidity from "./components/trustLiquity"

const page = () => {
    return (
        <>
            <GTCPrimeHero />
            <StartWithGTCPrime />
            <TrustedLiquidity />
            <BoostBrokerageHero />
            <SliderModalPrime isOpen={true}/>
        </>
    )
}

export default page