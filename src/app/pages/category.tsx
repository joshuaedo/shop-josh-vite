import { Page } from '@/components/common/page';
import { Header } from '@/components/common/header';
import {
  ProductGrid,
  ProductGridItem,
} from '@/features/products/components/product-grid';
import { PageLoader } from '@/components/common/loader';
import useCategory from '@/features/categories/hooks/use-category';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const { category } = useCategory(categorySlug);
  return category ? (
    <Page>
      <Header title={category?.name} />
      <ProductGrid>
        {category?.products &&
          category?.products?.map((product) => (
            <ProductGridItem key={product?.id} product={product} />
          ))}
      </ProductGrid>
    </Page>
  ) : (
    <PageLoader />
  );
}
