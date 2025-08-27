'use client';
import { useEffect, useState } from 'react';

const CustomButton = ({
  text,
  bgColor,
  textColor,
  strokeColor,
  showIcon = true,
  onClick,
}) => {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsRtl(document.documentElement.dir === 'rtl');
    }
  }, []);

  return (
    <button
      onClick={onClick}
      className={`rounded-full cursor-pointer bg-[#263f8f] text-white px-6 py-2 w-fit mx-auto text-sm font-medium shadow-md hover:opacity-90`}
    >
      {text}
  
    </button>
  );
};

export default CustomButton;
