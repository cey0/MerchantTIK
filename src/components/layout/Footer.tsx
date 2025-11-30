export default function Footer() {
  return (
    <footer class="bg-[#0C507B] text-white mt-20 ml-[120px] mr-[20px] rounded-xl shadow-lg font-varela">
      <div class="max-w-7xl mx-auto px-8 py-10 relative">
        {/* Top row: brand + description */}
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand Box */}
          <div class="inline-flex items-center gap-3 bg-[#DCE0D9] rounded-lg px-4 py-2 shadow-md w-max">
            <img src="./3.svg" alt="TIKREX" class="w-12 h-12" />
            <span class="text-4xl md:text-5xl text-black font-bold font-Gajraj">TIKREX</span>
          </div>
          {/* Description */}
          <p class="text-xl md:text-2xl leading-relaxed max-w-2xl">
            Merch resmi himpunan TIK — desain eksklusif untuk mahasiswa dan alumni.
          </p>
        </div>

        {/* Navigation columns */}
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          {/* Landing Page */}
          <div>
            <h3 class="text-2xl font-bold mb-4">Landing Page</h3>
            <ul class="space-y-3 text-xl">
              <li><a href="#" class="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="#" class="hover:text-gray-200 transition-colors">Banner</a></li>
              <li><a href="#" class="hover:text-gray-200 transition-colors">Products</a></li>
            </ul>
          </div>

          {/* Items */}
          <div>
            <h3 class="text-2xl font-bold mb-4">Items</h3>
            <ul class="space-y-3 text-xl">
              <li><a href="#workshirt" class="hover:text-gray-200 transition-colors">Workshirt</a></li>
              <li><a href="#lanyard" class="hover:text-gray-200 transition-colors">Lanyard</a></li>
              <li><a href="#sticker" class="hover:text-gray-200 transition-colors">Sticker</a></li>
              <li><a href="#keychain" class="hover:text-gray-200 transition-colors">Gantungan kunci</a></li>
            </ul>
          </div>

          {/* Bundling */}
          <div>
            <h3 class="text-2xl font-bold mb-4">Bundling</h3>
            <ul class="space-y-3 text-xl">
              <li><a href="#bundle-ultimate" class="hover:text-gray-200 transition-colors">Ultimate Tech Squad</a></li>
              <li><a href="#bundle-engineer" class="hover:text-gray-200 transition-colors">Engineer Supreme</a></li>
              <li><a href="#bundle-hackmode" class="hover:text-gray-200 transition-colors">Hack Mode</a></li>
              <li><a href="#bundle-devpack" class="hover:text-gray-200 transition-colors">Dev Pack</a></li>
              <li><a href="#bundle-starter" class="hover:text-gray-200 transition-colors">Starter Code</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div class="mt-12 pt-6 text-center text-sm md:text-base">
          © 2025 TIK Merchandise Project. Made by Himpunan TIK.
        </div>
      </div>
    </footer>
  );
}
