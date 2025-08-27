'use client';

import React from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import CustomButton from '../CustomButton';

const PartnerBanner = ({ setIsOpen }) => {
  const t = useTranslations('home.PartnerBanner');

  return (
    <section className="bg-[#f4f6fe] w-full py-10 md:py-16 flex justify-center">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-4xl font-semibold text-primary leading-snug">
            {t.rich('title', {
              br: () => <br />
            })}
          </h2>

          <p className="text-sm md:text-base xl:text-lg mt-6 leading-relaxed">
            {t('paragraph')}
          </p>

          <h5 className="text-secondary text-lg md:text-xl text-center mt-5 font-semibold">
            {t('subheading')}
          </h5>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-4">
             <CustomButton
                      text={t("registerCta")}
                      bgColor="bg-white hover:bg-[#b2b2c2]"
                      textColor="text-[#1F2937]"
                      strokeColor="#000032"
                      onClick={() => setIsOpen(true)}
                    />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanner;
