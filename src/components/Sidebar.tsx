import { A } from "@solidjs/router";

export default function Sidebar() {
  return (
    <aside class="fixed left-5 top-1/2 -translate-y-1/2 rounded-lg h-3/4 w-16 bg-[#DCE0D9] shadow-lg backdrop-blur-sm flex flex-col items-center py-6 z-50 border-r border-gray-200">
      <A href="/" class="hover:scale-110 transition-transform mb-auto">
        <img src="./3.svg" alt="Logo" />
      </A>
      
      {/* Group Icons */}
      <div class="flex flex-col gap-12">
        <A
          href="/home"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          title="Shopping Cart"
        >
          <img src="./cart.svg" alt="Cart Icon" />
        </A>
        <A
          href="/home"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          title="Home"
        >
          <img src="./home.svg" alt="Home Icon" />
        </A>
        <A
          href="/home"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          title="List"
        >
          <img src="./list.svg" alt="List Icon" />
        </A>
      </div>
      <A
        href="/home"
        class="text-gray-700 hover:text-red-600 transition-colors mt-auto"
        title="Profile"
      >
        <img src="./user.svg" alt="User Icon" />
      </A>
    </aside>
  );
}
