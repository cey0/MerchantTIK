export default function PromoBanner() {
  return (
    <div class="bg-[#0F305D] rounded-2xl p-10 mb-12 shadow-2xl relative overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="z-10">
          <h2 class="text-5xl font-bold text-white font-poppins mb-6 leading-tight">
            Grab up to 20% off on
            <br />
            <span class="text-6xl">Bundling Products</span>
          </h2>
          <button class="bg-white text-[#0F305D] px-8 py-3 rounded-lg font-bold font-varela text-base hover:bg-gray-100 transition-colors shadow-lg">
            Buy Now
          </button>
        </div>
        <div class="relative">
          <img src="/banner.png" alt="Bundling Pack" class="h-48 object-contain" />
          <div class="absolute top-2 right-2 bg-white text-[#0F305D] px-3 py-1.5 rounded-md font-bold text-sm shadow-lg">
            22-195K
          </div>
        </div>
      </div>
    </div>
  );
}