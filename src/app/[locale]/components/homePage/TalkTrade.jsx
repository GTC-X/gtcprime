'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import CalendlyButton from './CalendlyButton';
import CustomButton from '../CustomButton';

const TalkTrendsSection = ({ setIsOpen }) => {
  const t = useTranslations('home.TalkTrendsSection');

  return (
    <section className="bg-primary text-white py-10 md:py-16 border-b border-[#ffffff1e]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:max-w-xl text-center lg:text-start">
            <h2 className="text-xl md:text-3xl font-semibold mb-5">
              {t.rich('title', { br: () => <br /> })}
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-6">
              {t('paragraph')}
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
             <CustomButton
                      text={t("registerCta")}
                      bgColor="bg-white hover:bg-[#b2b2c2]"
                      textColor="text-[#1F2937]"
                      strokeColor="#000032"
                      onClick={() => setIsOpen(true)}
                    />
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block relative w-[280px] h-[280px] shrink-0 rounded-full overflow-hidden shadow-xl border-4 border-[#16225c]">
            <Image
              src="/homepage/04.png"
              alt="Calendar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkTrendsSection;
