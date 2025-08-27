'use client';

import React from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import CalendlyButton from './CalendlyButton';
import CustomButton from '../CustomButton';

const PartnerSectionTwo = ({ setIsOpen }) => {
  const t = useTranslations('home.PartnerSectionTwo');

  return (
    <section className="w-full bg-white py-10 md:py-16 text-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
            {t.rich('title', { br: () => <br /> })}
          </h2>

          <p className="text-sm md:text-base mt-6">
            {t('paragraph')}
          </p>

          <h5 className="text-secondary text-lg md:text-xl text-center mt-5 font-semibold">
            {t.rich('subheading', { br: () => <br /> })}
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

export default PartnerSectionTwo;
