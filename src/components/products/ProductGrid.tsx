import { For } from 'solid-js';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: { 
    imageAlt: string; 
    name: string; 
    price: string;
    image?: string;
    rating?: number;
  }[];
}

export const ProductGrid = (props: ProductGridProps) => {
  return (
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-7 lg:gap-8 justify-items-center">
        <For each={props.products}>{(product) =>
          <ProductCard
            product={product}
            cartIconAlt="Add to Cart Icon"
          />
        }</For>
      </div>
  );
};