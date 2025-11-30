export default function PromoBanner() {
  return (
    <div class="bg-[#0F305D] rounded-2xl p-8 mb-12 ml-[150px] mr-[50px] shadow-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-6xl font-bold text-white font-poppins mb-4 leading-tight">
            Grab up to 20% off on
            <br />
            Bundling Products
          </h2>
          <p class="text-gray-300 text-lg mb-6 font-varela">
            Discover exclusive merchandise designed for tech enthusiasts and alumni.
          </p>
          <button class="bg-gray-200 text-black px-10 py-3 rounded-xl font-bold font-varela text-lg hover:bg-white transition-colors shadow-lg">
            Buy Now
          </button>
        </div>
        <div class="relative">
          <div class="grid grid-cols-3 gap-4">
            <div class="backdrop-blur-sm">
              <img src="/ultimate-bundle.png" alt="Ultimate Tech Squad Bundle" class="w-full h-full object-contain" />
            </div>
            <div class="blur-sm">
              <img src="/hack-bundle.png" alt="Hack Mode Bundle" class="w-full h-full object-contain" />
            </div>
            <div class="blur-sm">
              <img src="/hack-bundle.png" alt="Hack Mode Bundle" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}