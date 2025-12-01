// Definisikan tipe untuk Product data
interface Product {
    imageAlt: string;
    name: string;
    price: string;
    image?: string;
    rating?: number; // 0-5 stars
    totalPriceBadge?: string; // e.g., "195K" for bundling cards
}

interface ProductCardProps {
    product: Product;
    cartIconAlt: string;
}

const CartIcon = (props: { alt: string }) => (
    <svg
        class="w-3.5 h-3.5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        role="img"
        aria-label={props.alt}
    >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path>
    </svg>
);

import Separator from "~/components/layout/Separator";

export const ProductCard = (props: ProductCardProps) => {
    return (
        <div
            class="w-[206px] h-[350px] bg-linear-to-b from-[#1B4A6E] to-[#0F305D] rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
        >
            {/* Area Gambar Produk */}
            <div class="h-[238.5px] relative bg-[#0F305D]">
                <div
                    class="absolute inset-0 bg-[#0F305D] p-3 flex items-center justify-center"
                >
                    {props.product.image ? (
                        <img
                            src={props.product.image}
                            alt={props.product.imageAlt}
                            class="w-full h-full object-contain"
                        />
                    ) : (
                        <div class="w-full h-full bg-gray-200/50 flex items-center justify-center">
                            <span class="text-sm text-gray-600">{props.product.imageAlt}</span>
                        </div>
                    )}
                    {/* Price badge for bundling cards */}
                    {props.product.totalPriceBadge && (
                        <div class="absolute top-3 right-3 bg-white text-[#0F305D] px-2.5 py-1 rounded-md text-xs font-bold shadow-lg">
                            {props.product.totalPriceBadge}
                        </div>
                    )}
                </div>
            </div>

            {/* Detail Produk */}
            <div
                class="bg-white h-[112.5px] rounded-b-2xl p-3 flex flex-col justify-between"
            >
                <div>
                    <h3
                        class="text-left text-black font-varela text-[15px] font-bold truncate"
                    >
                        {props.product.name}
                    </h3>
                    <p
                        class="text-left text-black font-varela text-[13px] mt-1"
                    >
                        {props.product.price}
                    </p>
                    {/* Rating stars */}
                    <div class="mt-1 flex items-center gap-1">
                        {Array.from({ length: Math.min(5, props.product.rating ?? 5) }).map(() => (
                            <svg class="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Separator dan Tombol Add to Cart */}
                <div class="mt-2">
                    <Separator class="my-1 bg-black/10" />

                    <button
                        class="w-full h-6 bg-[#0F305D] rounded-md flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02] shadow"
                        onClick={() => console.log('Add to cart clicked')}
                    >
                        <CartIcon alt={props.cartIconAlt} />
                        <span
                            class="text-white font-varela text-[10px] uppercase font-bold tracking-wide"
                        >
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};