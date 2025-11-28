export default function Footer() {
  return (
    <footer class="bg-[rgb(0,68,102)] text-white py-6 rounded-xl mt-20 w-full">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div class="col-span-2">
            <div class="inline-block bg-[#DCE0D9] rounded-lg px-4 py-2 shadow-sm">
              <div class="flex items-center">
                <img src="./3.svg" alt="TIKREX" class="w-15 h-15"/>
                <span class="text-5xl text-black font-bold font-Gajraj">TIKREX</span>
              </div>
            </div>
            <p class="text-xl text-gray-300 leading-relaxed font-varela">
              Merch resmi himpunan TIK — desain eksklusif untuk mahasiswa dan alumni.
            </p>
          </div>
          
          {/* Landing Page Links */}
          <div>
            <h3 class="font-bold mb-4">Landing Page</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#items" class="hover:text-orange-400 transition-colors">Items</a></li>
              <li><a href="#products" class="hover:text-orange-400 transition-colors">Products</a></li>
            </ul>
          </div>
          
          {/* Items Links */}
          <div>
            <h3 class="font-bold mb-4">Items</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-orange-400 transition-colors">Workshirt</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Lanyard</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Sticker</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Gantungan Kunci</a></li>
            </ul>
          </div>
          
          {/* Bundling Links */}
          <div>
            <h3 class="font-bold mb-4">Bundling</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-orange-400 transition-colors">Ultimate Tech Squad</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Engineer Supreme</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Pack Mode</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Dev Pack</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Starter Code</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div class="mt-12 pt-8 border-t border-blue-800 text-center text-sm text-gray-400">
          © 2025 TIK Merchandise Project. Made by Himpunan TIK.
        </div>
      </div>
    </footer>
  );
}
