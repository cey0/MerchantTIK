export default function PromoBanner() {
  return (
    <div class="relative mb-12">
      <div class="bg-[#0F305D] rounded-2xl p-8 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="z-10">
            <h2 class="text-3xl md:text-4xl font-bold text-white font-poppins leading-tight mb-6">
              Grab up to 20% off on
              <br />
              Bundling Products
            </h2>
            <button class="bg-white text-[#0F305D] px-8 py-3 rounded-lg font-bold font-varela text-base hover:bg-gray-100 transition-colors shadow-lg">
              Buy Now
            </button>
          </div>
          <div class="relative shrink-0 flex gap-3">
            <img src="/bundling.png" alt="Bundling Pack" class="h-50 object-contain" />
            <img src="/bundling.png" alt="Bundling Pack" class="h-50 object-contain blur-sm" />
            <img src="/bundling.png" alt="Bundling Pack" class="h-50 object-contain blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}