import React from 'react';
import { motion } from 'framer-motion';
import { opacity, perspective, anim, pageSlide } from '@/lib/anim';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Toaster from '@/components/layout/toaster';
import { useMenu } from '@/hooks/use-menu';
// import useLenisSmoothScroll from '@/hooks/use-lenis-smooth-scroll';
import useScrollToTop from '@/hooks/use-scroll-to-top';
// import { useLocation } from 'react-router-dom';

export const Page = ({ children }: { children: React.ReactNode }) => {
  // const { pathname } = useLocation();
  // const isHomePage = pathname === '/';
  const isHomePage = false;
  const { blurOnOpen } = useMenu();
  // useLenisSmoothScroll();
  useScrollToTop();

  return (
    <div className={cn('font-geist bg-black font-medium tracking-tight')}>
      <motion.div
        className='h-screen w-full fixed left-0 top-0 bg-white z-10'
        {...anim(pageSlide)}
      />
      <motion.div className='bg-white' {...anim(perspective)}>
        <motion.div
          className={cn(isHomePage ? 'h-screen' : 'min-h-[100svh]')}
          {...anim(opacity)}
        >
          <Navbar />
          <main
            style={blurOnOpen}
            className={cn(
              isHomePage
                ? ''
                : 'min-h-[100svh] px-6 md:px-8 lg:px-12 pt-20 pb-12'
            )}
          >
            {children}
          </main>
          <Footer />
          <Toaster />
        </motion.div>
      </motion.div>
    </div>
  );
};
