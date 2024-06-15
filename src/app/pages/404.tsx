import { Link } from 'react-router-dom';
import { Page } from '@/components/common/page';
import { buttonVariants } from '@/components/common/button';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { PageLoader } from '@/components/common/loader';

export default function NotFoundPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Page>
        <div className='bg-gray-100 mt-8 flex items-center justify-center h-[80svh]'>
          <div className='bg-gray-200 flex items-center justify-center w-[80%] md:w-[70%] lg:w-[60%] h-[70svh] md:h-[60svh]'>
            <div className='flex flex-col items-center gap-2 lg:gap-4'>
              <p className='text-lg lg:text-xl lowercase'>Page not found.</p>
              <div className='flex gap-2 lg:gap-4'>
                <Link
                  to={'/'}
                  className={cn(
                    'text-xs md:text-sm',
                    buttonVariants()({ variant: 'outline' })
                  )}
                >
                  Go back to bedroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </Suspense>
  );
}
