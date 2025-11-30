import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";
import PageHeader from "~/components/layout/PageHeader";
import PromoBanner from "~/components/products/PromoBanner";
import { ProductGrid } from "~/components/products/Productgrid";

export default function ItemsPage() {
  const products = [
    {
      imageAlt: "Ultimate Tech Squad",
      name: "Ultimate Tech Squad Bundle",
      price: "Rp 195.000",
      image: "/ultimate-bundle.png"
    },
    {
      imageAlt: "Starter Code",
      name: "Starter Code Bundle",
      price: "Rp 22.000",
      image: "/starter-bundle.png"
    },
    {
      imageAlt: "Hack Mode",
      name: "Hack Mode Bundle",
      price: "Rp 180.000",
      image: "/hack-bundle.png"
    },
    {
      imageAlt: "Engineer Supreme",
      name: "Engineer Supreme Bundle",
      price: "Rp 185.000",
      image: "/engineer-bundle.png"
    },
    {
      imageAlt: "Workshirt TIK",
      name: "Workshirt TIK",
      price: "Rp 170.000",
      image: "/workshirt.png"
    },
    {
      imageAlt: "Lanyard",
      name: "Lanyard",
      price: "Rp 20.000",
      image: "/lanyard.png"
    },
    {
      imageAlt: "Sticker",
      name: "Sticker",
      price: "Rp 10.000",
      image: "/sticker.png"
    },
    {
      imageAlt: "Gantungan Kunci",
      name: "Gantungan Kunci",
      price: "Rp 15.000",
      image: "/ganci.png"
    },
    {
      imageAlt: "T-Shirt",
      name: "T-Shirt",
      price: "Rp 80.000",
      image: "/tshirt.png"
    }
  ];

  return (
    <div class="min-h-screen bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B]">
      <Sidebar />
      
      <main class="ml-[150px] mr-[50px]">
        <PageHeader />
        <PromoBanner />
        <ProductGrid products={products} />
      </main>

      <Footer />
    </div>
  );
}