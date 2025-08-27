'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';

import CustomButton from '../CustomButton';

const GoodPartner = ({ setIsOpen }) => {
  const t = useTranslations('home.GoodPartner');

  return (
    <section className="bg-[#f5f7ff] py-10 md:py-16">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-semibold leading-tight text-primary">
            {t.rich('title', { br: () => <br /> })}
          </h2>

          <p className="mt-6 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {t('paragraph')}
          </p>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
            <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
              <div className="bg-primary text-white text-sm font-medium text-center py-3">
                {t.rich('cards.card1.title', { br: () => <br /> })}
              </div>
              <div className="p-4 py-10 text-sm leading-relaxed">
                {t('cards.card1.desc')}
              </div>
            </div>

            <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
              <div className="bg-primary text-white text-sm font-medium text-center py-3">
                {t.rich('cards.card2.title', { br: () => <br /> })}
              </div>
              <div className="p-4 py-10 text-sm leading-relaxed">
                {t('cards.card2.desc')}
              </div>
            </div>

            <div className="rounded-tl-4xl rounded-br-4xl shadow-xl overflow-hidden bg-white">
              <div className="bg-primary text-white text-sm font-medium text-center py-3">
                {t.rich('cards.card3.title', { br: () => <br /> })}
              </div>
              <div className="p-4 py-10 text-sm leading-relaxed">
                {t('cards.card3.desc')}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
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

export default GoodPartner;
