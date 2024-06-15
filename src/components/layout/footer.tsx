import { siteConfig } from '@/config/site';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMenu } from '@/hooks/use-menu';
import { useLocation } from 'react-router-dom';

const { title } = siteConfig;

const FixedFooter = () => {
  // const { pathname } = useLocation();
  // const isHomePage = pathname === '/';
  const isHomePage = false;
  const { blurOnOpen } = useMenu();

  if (isHomePage) return <></>;

  return (
    <footer
      className='relative h-[75px] md:h-[150px] lg:h-[225px] xl:h-[300px] bg-[#242424]'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div
        style={blurOnOpen}
        className='fixed h-[75px] md:h-[150px] lg:h-[225px] xl:h-[300px] w-full bottom-0 p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col'
      >
        <p className='text-white text-[18.5vw] leading-[0.8] mt-[15px] md:mt-[30px] lg:mt-[45px] xl:mt-[60px] whitespace-nowrap'>
          {title}
        </p>
      </div>
    </footer>
  );
};

const MotionFooter = () => {
  // const { pathname } = useLocation();
  // const isHomePage = pathname === '/';
  const isHomePage = false;
  const { blurOnOpen } = useMenu();
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  if (isHomePage) return <></>;

  return (
    <footer style={blurOnOpen} ref={container}>
      <div className='h-[6rem] md:h-[10rem] lg:h-[13rem] xl:h-[18rem] bg-[#242424] overflow-hidden relative'>
        <motion.div
          style={{ y }}
          className='h-full bg-[#242424] flex justify-center items-center'
        >
          <p className='absolute bottom-[-40px] md:bottom-[-80px] lg:bottom-[-110px] xl:bottom-[-140px] text-white text-[5rem] md:text-[9rem] lg:text-[12rem] xl:text-[17rem] whitespace-nowrap'>
            {title}
          </p>
          {/* TODO: Design footer image? */}
        </motion.div>
      </div>
    </footer>
  );
};

export { FixedFooter as default, MotionFooter };
