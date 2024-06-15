import { Page } from '@/components/common/page';
import useProduct from '@/features/products/hooks/use-product';
import { Header } from '@/components/common/header';
import { Loader, PageLoader } from '@/components/common/loader';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';

export default function ShopAllPage() {
  const { allProducts, lastProductRef, isGettingNextPage } = useProduct();

  return allProducts ? (
    <Page>
      <Header title='Shop All' />
      <ProductGrid>
        {allProducts?.map((product, index) => (
          <ProductGridItem
            product={product}
            key={product?.id}
            ref={index === allProducts?.length - 1 ? lastProductRef : null}
          />
        ))}
      </ProductGrid>
      {isGettingNextPage && (
        <div className='min-h-[12.5svh] md:min-h-[25svh] lg:min-h-[37.5svh] xl:min-h-[50svh] flex items-center justify-center'>
          <Loader />
        </div>
      )}
    </Page>
  ) : (
    <PageLoader />
  );
}
