import BannerSection from '@/app/[locale]/components/homePage/Banner'
import PartnerBanner from '@/app/[locale]/components/homePage/PartnerBanner'
import PartnerSectionTwo from '@/app/[locale]/components/homePage/PartnerBanner2'
import GoodPartner from '@/app/[locale]/components/homePage/GoodPartner'
import TalkTrendsSection from '@/app/[locale]/components/homePage/TalkTrade'
import RegulationBar from '@/app/[locale]/components/homePage/RegularBar'
import React from 'react'
import Header from '@/app/[locale]/components/Header'

const page = () => {
  return (
    <>
    <Header calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
     <BannerSection calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <PartnerBanner calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <PartnerSectionTwo calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <GoodPartner calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <TalkTrendsSection calendlyUrl="https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad" />
      <RegulationBar />
     
    </>
  )
}

export default page