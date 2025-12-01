import { createSignal } from "solid-js";
import { clientOnly } from "@solidjs/start";
import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";
import PageHeader from "~/components/layout/PageHeader";
import PromoBanner from "~/components/products/PromoBanner";
import { ProductGrid } from "~/components/products/ProductGrid";
import BluePanel from "~/components/layout/BluePanel";
import Separator from "~/components/layout/Separator";
import DiagonalLines from "~/components/decor/DiagonalLines";

const CartDrawer = clientOnly(() => import("~/components/cart/CartDrawer"));

export default function ItemsPage() {
  const [isCartOpen, setIsCartOpen] = createSignal(false);
  const bundles = [
    {
      imageAlt: "Ultimate Tech Squad",
      name: "Ultimate Tech Squad Bundle",
      price: "Rp 195.000",
      image: "/ultimate-bundle.png",
      rating: 5,
      totalPriceBadge: "195K"
    },
    {
      imageAlt: "Starter Code",
      name: "Starter Code Bundle",
      price: "Rp 22.000",
      image: "/starter-bundle.png",
      rating: 5,
      totalPriceBadge: "22K"
    },
    {
      imageAlt: "Hack Mode",
      name: "Hack Mode Bundle",
      price: "Rp 180.000",
      image: "/hack-bundle.png",
      rating: 5,
      totalPriceBadge: "180K"
    },
    {
      imageAlt: "Engineer Supreme",
      name: "Engineer Supreme Bundle",
      price: "Rp 185.000",
      image: "/engineer-bundle.png",
      rating: 5,
      totalPriceBadge: "185K"
    },
    {
      imageAlt: "Dev Pack",
      name: "Dev Pack Bundle",
      price: "Rp 40.000",
      image: "/dev-bundle.png",
      rating: 5,
      totalPriceBadge: "40K"
    }
  ];

  const products = [
    {
      imageAlt: "Workshirt TIK",
      name: "Workshirt TIK",
      price: "Rp 170.000",
      image: "/workshirt.png",
      rating: 5
    },
    {
      imageAlt: "Lanyard",
      name: "Lanyard",
      price: "Rp 20.000",
      image: "/lanyard.png",
      rating: 5
    },
    {
      imageAlt: "Sticker",
      name: "Sticker",
      price: "Rp 10.000",
      image: "/sticker.png",
      rating: 5
    },
    {
      imageAlt: "Gantungan Kunci",
      name: "Gantungan Kunci",
      price: "Rp 15.000",
      image: "/ganci.png",
      rating: 5
    },
    {
      imageAlt: "T-Shirt",
      name: "T-Shirt",
      price: "Rp 80.000",
      image: "/tshirt.png",
      rating: 5
    }
  ];

  return (
    <div class="min-h-screen bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B] relative">
      <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <DiagonalLines />
      </div>
      
      <Sidebar />
      
      <main class="ml-[150px] mr-[50px] relative z-10 pt-4 pb-16 space-y-8">
        <PageHeader />
        <PromoBanner />
        
        <BluePanel title="MOST POPULAR BUNDLES">
          <Separator class="mb-6" />
          <ProductGrid products={bundles} />
          <Separator class="mt-6" />
        </BluePanel>
        
        <BluePanel title="OUR BEST-SELLING PRODUCTS">
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