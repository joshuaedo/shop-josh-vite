import { siteConfig } from '@/config/site';
import { ProductCart } from '@/features/products/components/product-cart';
import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import Menu from './menu';
import { useMenu } from '@/hooks/use-menu';
import { Link, useLocation } from 'react-router-dom';

const { title } = siteConfig;

const Navbar = () => {
  const { pathname } = useLocation();
  const { blurOnOpen } = useMenu();
  const { lg } = useMediaQuery();
  // const isHomePage = pathname === '/';
  const isHomePage = false;

  const routes = [
    {
      to: `/categories/topwear`,
      label: 'topwear',
    },
    {
      to: `/products/maison-margiela-tabi-ankle-boots`,
      label: 'tabi ankle boots',
    },
    // {
    //   to: `/categories/shop-all`,
    //   label: 'shop all',
    // },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 capitalize text-sm lg:text-base flex items-center w-full px-6 md:px-8 lg:px-12',
        isHomePage ? 'text-white' : 'text-black bg-white'
      )}
    >
      <div
        className={cn(
          'relative w-full h-full flex justify-between py-6',
          isHomePage ? '' : 'border-b border-black'
        )}
      >
        <div className={cn('flex items-center gap-8')}>
          <Menu />
          {lg ? (
            <div style={blurOnOpen} className={cn('flex items-center gap-8')}>
              {routes.map((route) => (
                <Link
                  key={route.label}
                  to={route.to}
                  className={cn('transition-colors', isHomePage ? '' : '')}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <Link
          to='/'
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            isHomePage ? '' : ''
          )}
        >
          {title}
        </Link>
        <div style={blurOnOpen} className={cn('flex items-center')}>
          <ProductCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
