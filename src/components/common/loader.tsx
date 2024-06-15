import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const { title } = siteConfig;

const Loader = () => {
  return (
    <div className='flex min-h-[25svh] h-full w-full items-center justify-center'>
      <Loader2 className='animate-spin' />
    </div>
  );
};

const PageLoader = () => {
  return (
    <div
      className={cn(
        'font-geist bg-white flex items-center justify-center text-xl h-screen animate-pulse font-medium tracking-tight '
      )}
    >
      {title}
    </div>
  );
};

export { Loader, PageLoader };
