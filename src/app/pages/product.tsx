import { PageLoader } from '@/components/common/loader';
import { Page } from '@/components/common/page';
import { Product } from '@/features/products/components/product';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import useProduct from '@/features/products/hooks/use-product';
import useCategory from '@/features/categories/hooks/use-category';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { productSlug } = useParams();
  const { product } = useProduct(productSlug);
  const { relatedProducts } = useCategory(product?.categorySlug);

  return product ? (
    <Page>
      {product ? (
        <Product product={product} />
      ) : (
        <div className='p-6'>No product found</div>
      )}
      <Header title='Related products' />
      <ProductGrid>
        {relatedProducts
          ?.filter((relatedProduct) => relatedProduct?.id !== product?.id)
          ?.slice(0, 3)
          ?.map((product) => (
            <ProductGridItem key={product?.id} product={product} />
          ))}
      </ProductGrid>
    </Page>
  ) : (
    <PageLoader />
  );
}
