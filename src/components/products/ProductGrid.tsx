import { For } from 'solid-js';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: { imageAlt: string; name: string; price: string }[];
}

export const ProductGrid = (props: ProductGridProps) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center p-8">
      <For each={props.products}>{(product) => 
        <ProductCard 
          product={product} 
          cartIconAlt="Add to Cart Icon" 
        />
      }</For>
    </div>
  );
};