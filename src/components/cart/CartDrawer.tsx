import { createSignal, Show, For } from "solid-js";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer(props: CartDrawerProps) {
  const [promoCode, setPromoCode] = createSignal("");
  const [cartItems, setCartItems] = createSignal<CartItem[]>([
    { id: "1", name: "Ultimate Tech Squad Bundle", price: 195000, quantity: 1, image: "/ultimate-bundle.png" },
    { id: "2", name: "Lanyard", price: 20000, quantity: 2, image: "/lanyard.png" },
    { id: "3", name: "Sticker", price: 10000, quantity: 3, image: "/sticker.png" }
  ]);

  const subtotal = () => cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = () => 0;
  const total = () => subtotal() - discount();

  const formatRupiah = (amount: number) => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      {/* Backdrop */}
      <Show when={props.isOpen}>
        <div
          class="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={props.onClose}
          aria-hidden="true"
        />
      </Show>

      {/* Drawer */}
      <div
        class={`fixed top-0 right-0 h-full w-full max-w-[800px] bg-[#E4EBF3] shadow-2xl z-50 transform transition-transform duration-300 ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div class="h-full flex flex-col">
          {/* Header */}
          <div class="bg-white p-6 shadow-md flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-[#0F305D] font-poppins">Cart</h2>
              <p class="text-sm text-gray-600 font-varela">({cartItems().length} products)</p>
            </div>
            <div class="flex items-center gap-4">
              <button
                onClick={clearCart}
                class="text-[#DA3636] hover:text-[#B02525] font-varela text-sm font-bold transition-colors"
                aria-label="Clear cart"
              >
                Clear Cart
              </button>
              <button
                onClick={props.onClose}
                class="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close cart"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div class="flex-1 overflow-y-auto p-6 space-y-4">
            <Show
              when={cartItems().length > 0}
              fallback={
                <div class="flex flex-col items-center justify-center h-full text-center">
                  <svg class="w-20 h-20 text-gray-400 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <p class="text-gray-600 font-varela text-lg">Your cart is empty</p>
                  <button
                    onClick={props.onClose}
                    class="mt-4 bg-[#0F305D] text-white px-6 py-2 rounded-lg font-varela hover:bg-[#124469] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              }
            >
              <For each={cartItems()}>
                {(item) => (
                  <div class="bg-[#0C507B] rounded-xl p-4 flex items-center gap-4 shadow-md">
                    <div class="w-20 h-20 bg-[#0F305D] rounded-lg flex items-center justify-center shrink-0">
                      <Show when={item.image} fallback={<div class="w-full h-full bg-gray-300/30" />}>
                        <img src={item.image} alt={item.name} class="w-full h-full object-contain p-1" />
                      </Show>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-white font-varela font-bold text-sm">{item.name}</h3>
                      <p class="text-white/80 font-varela text-xs mt-1">{formatRupiah(item.price)}</p>
                      <p class="text-white/60 font-varela text-xs mt-0.5">Qty: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      class="text-[#DA3636] hover:text-[#B02525] transition-colors p-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </For>
            </Show>
          </div>

          {/* Footer Summary */}
          <Show when={cartItems().length > 0}>
            <div class="bg-white p-6 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
              {/* Promo Code */}
              <div class="mb-4">
                <label class="block text-sm font-bold text-[#0F305D] font-varela mb-2">Promo Code</label>
                <div class="flex gap-2">
                  <input
                    type="text"
                    value={promoCode()}
                    onInput={(e) => setPromoCode(e.currentTarget.value)}
                    placeholder="Type here"
                    class="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm font-varela focus:outline-none focus:ring-2 focus:ring-[#0F305D]/30"
                  />
                  <button class="bg-[#0F305D] text-white px-6 py-2 rounded-lg font-varela text-sm hover:bg-[#124469] transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div class="h-px bg-gray-300 my-4" />

              {/* Summary */}
              <div class="space-y-2 mb-4">
                <div class="flex justify-between text-sm font-varela">
                  <span class="text-gray-700">Subtotal</span>
                  <span class="font-bold text-[#0F305D]">{formatRupiah(subtotal())}</span>
                </div>
                <div class="flex justify-between text-sm font-varela">
                  <span class="text-gray-700">Discount</span>
                  <span class="font-bold text-[#0F305D]">{formatRupiah(discount())}</span>
                </div>
                <div class="h-px bg-gray-300 my-2" />
                <div class="flex justify-between text-lg font-varela">
                  <span class="font-bold text-[#0F305D]">Total</span>
                  <span class="font-bold text-[#0F305D]">{formatRupiah(total())}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button class="w-full bg-[#0F305D] text-white py-4 rounded-xl font-bold font-varela text-base hover:bg-[#124469] active:scale-[0.98] transition-all shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
}
