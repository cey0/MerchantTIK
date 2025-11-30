// Definisikan tipe untuk Product data
interface Product {
    imageAlt: string;
    name: string;
    price: string;
    image?: string;
}

interface ProductCardProps {
    product: Product;
    cartIconAlt: string;
}

const CartIcon = (props: { alt: string }) => (
    <span class="text-xs text-white" aria-label={props.alt}>
        {props.alt}
    </span>
);

export const ProductCard = (props: ProductCardProps) => {
    return (
        <div
            class="w-[250px] h-[350px] bg-[#0f305d] rounded-lg shadow-xl overflow-hidden flex flex-col"
        >
            {/* Area Gambar Produk */}
            <div class="h-[238.5px] relative bg-[#0F305D]">
                <div
                    class="absolute inset-0 p-4 flex items-center justify-center"
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
                </div>
            </div>

            {/* Detail Produk */}
            <div
                id="Rectangle_23"
                class="bg-[#f4f7fa] h-[112.5px] rounded-b-lg p-3 flex flex-col justify-between"
            >
                <div>
                    <h3
                        id="_188_726"
                        class="text-left text-black font-varela text-xl font-medium truncate"
                    >
                        {props.product.name}
                    </h3>
                    <p
                        id="_188_727"
                        class="text-left text-black font-varela text-base mt-1"
                    >
                        {props.product.price}
                    </p>
                </div>

                {/* Separator dan Tombol Add to Cart */}
                <div class="mt-2">
                    <hr id="Line_12" class="border-t-[0.8px] border-[#0f305d] my-1" />

                    <button
                        id="Group_78"
                        class="w-full h-6 bg-[#0f305d] rounded-md flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02]"
                        onClick={() => console.log('Add to cart clicked')}
                    >
                        <CartIcon alt={props.cartIconAlt} />
                        <span
                            id="_188_967"
                            class="text-white font-varela text-[10px] uppercase font-bold"
                        >
                            Add to Cart
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};