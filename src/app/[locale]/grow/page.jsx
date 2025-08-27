'use client'
import GoodPartner from '@/app/[locale]/components/homePage/GoodPartner'
import PartnerBanner from '@/app/[locale]/components/homePage/PartnerBanner'
import PartnerSectionTwo from '@/app/[locale]/components/homePage/PartnerBanner2'
import RegulationBar from '@/app/[locale]/components/homePage/RegularBar'
import TalkTrendsSection from '@/app/[locale]/components/homePage/TalkTrade'
import { useState } from "react";
import Image from 'next/image'
import CalendlyButton from '@/app/[locale]/components/homePage/CalendlyButton'
import Header from '@/app/[locale]/components/Header'
import Link from 'next/link'
import Meta from '../components/Meta'
import { useTranslations } from 'next-intl'
import SliderModal from '../components/SliderModal'
import CustomButton from '../components/CustomButton'


const page = () => {

   const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("home")
  return (
    <>
    
    <Header setIsOpen={setIsOpen}  />
    <Meta title={t("metaData.title")} description={t("metaData.description")} />
        <div className="bg-img-banner">
              <section className="bg-[#ffffffc7] flex flex-col justify-center items-center py-4 relative container mx-auto">
                {/* Content Wrapper */}
                <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:py-10 items-center">
                  {/* Left Content */}
                  <div className="md:w-2/4 w-full text-center ltr:md:text-left rtl:md:text-right px-2 space-y-2 text-primary">
                  <h5 className='text-lg md:text-2xl xl:text-3xl font-medium'>{t("banner.topText")}</h5>
                    <h1 className="text-2xl md:text-4xl xl:text-[40px] uppercase leading-tight font-black text-secondary max-w-xs md:max-w-xl mx-auto md:mx-0">
                     {t("banner.title")}
                     
                    </h1>
                    <h3 className='text-2xl md:text-2xl xl:text-4xl font-medium max-w-xs md:max-w-xl mx-auto md:mx-0'> {t("banner.subtitle")}</h3>
        
                    <div className="relative block md:hidden mb-5 ">
                    <Image
                                src="/mehdi.png"
                                alt="Suha"
                                width={300}
                                height={400}
                                className="mx-auto w-44 md:w-full lg:w-2/4 max-w-sm object-contain"
                                priority
                              />
                    </div>
        
                    <p className="text-sm md:text-base xl:text-[17px] mb-4">{t("banner.description")} </p>
        
                    <p className="font-medium mb-6 text-base max-w-lg">
                      <strong>{t("banner.bottomText")}</strong>
                    </p>
        
                   
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 text-center text-sm">
                                        <div>
                                            <img src="/icon-05.webp" alt="Trading" className="mx-auto h-10 mb-2" />
                                            <p className='text-xs text-[#be9b74]'>{t("banner.list.item1")}</p>
                                        </div>
                                        <div>
                                            <img src="/icon-02.webp" alt="Tools" className="mx-auto h-10 mb-2" />
                                            <p className='text-xs text-[#be9b74]'>{t("banner.list.item2")}</p>
                                        </div>
                                        <div>
                                            <img src="/icon-03.webp" alt="Infrastructure" className="mx-auto h-10 mb-2" />
                                            <p className='text-xs text-[#be9b74]'>{t("banner.list.item3")}</p>
                                        </div>
                                        <div>
                                            <img src="/icon-04.webp" alt="Rewards" className="mx-auto h-10 mb-2" />
                                            <p className='text-xs text-[#be9b74]'>{t("banner.list.item4")}</p>
                                        </div>
                                    </div>
                  </div>
        
                  {/* Right Image Section */}
                  <div className="text-center md:w-2/4 w-full px-4 hidden md:block">
                    <Image
                      src="/mehdi.png"
                      alt="Suha"
                      width={300}
                      height={400}
                      className="mx-auto w-42 md:w-full lg:w-2/4 max-w-sm object-contain"
                      priority
                    />
                    <div className="bg-[#263f8f] text-white rounded-tl-xl rounded-br-xl px-6 py-3 w-fit mx-auto text-sm font-medium shadow-md mt-2">
                     {t("banner.name")} <br />
                      <span className="text-xs">{t("banner.position")}</span>
                    </div>
                  </div>
                </div>
        
            
              </section>
            </div>
            <PartnerBanner setIsOpen={setIsOpen}   />
           <PartnerSectionTwo setIsOpen={setIsOpen}   />
            <GoodPartner setIsOpen={setIsOpen} />
            <TalkTrendsSection setIsOpen={setIsOpen} />
            <RegulationBar  setIsOpen={setIsOpen} />
             <SliderModal isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />

    </>
  )
}

export default page