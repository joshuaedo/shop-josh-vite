import NotFoundPage from '@/app/pages/404';
// import BedroomPage from '@/app/pages/bedroom';
import CategoryPage from '@/app/pages/category';
import ProductPage from '@/app/pages/product';
import ShopAllPage from '@/app/pages/shop-all';
import { Route, Routes, useLocation } from 'react-router-dom';

export const Router = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      {/* <Route path={'/'} element={<BedroomPage />} /> */}
      <Route path={'/'} element={<ShopAllPage />} />
      {/* <Route path={'/categories/shop-all'} element={<ShopAllPage />} /> */}
      <Route path={'/categories/:categorySlug'} element={<CategoryPage />} />
      <Route path={'/products/:productSlug'} element={<ProductPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
