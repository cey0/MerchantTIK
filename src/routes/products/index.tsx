import { createSignal } from "solid-js";
import { clientOnly } from "@solidjs/start";
import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";
import PageHeader from "~/components/layout/PageHeader";
import { ProductGrid } from "~/components/products/ProductGrid";
import BluePanel from "~/components/layout/BluePanel";
import Separator from "~/components/layout/Separator";

const CartDrawer = clientOnly(() => import("~/components/cart/CartDrawer"));

export default function ProductsPage() {
  const [isCartOpen, setIsCartOpen] = createSignal(false);
  const products = [
    { imageAlt: "Workshirt TIK", name: "Workshirt TIK", price: "Rp 170.000", image: "/workshirt2.png", rating: 5 },
    { imageAlt: "Lanyard", name: "Lanyard", price: "Rp 20.000", image: "/lanyard2.png", rating: 5 },
    { imageAlt: "Sticker", name: "Sticker", price: "Rp 10.000", image: "/sticker.png", rating: 5 },
    { imageAlt: "Gantungan Kunci", name: "Gantungan Kunci", price: "Rp 15.000", image: "/ganci.png", rating: 5 },
    { imageAlt: "T-Shirt", name: "T-Shirt", price: "Rp 80.000", image: "/tshirt.png", rating: 5 },
  ];

  return (
    <div class="min-h-screen bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B] relative">
      <Sidebar />
      <main class="ml-[150px] mr-[50px] relative z-10 pt-16 pb-16 space-y-12">
        <PageHeader />
        <BluePanel title="OUR PRODUCTS">
          <Separator class="mb-6" />
          <ProductGrid products={products} />
          <Separator class="mt-6" />
        </BluePanel>
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen()} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
