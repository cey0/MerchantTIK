import { A } from "@solidjs/router";

export default function SidebarLogin() {
  return (
    <aside class="fixed left-5 top-1/2 -translate-y-1/2 rounded-lg h-3/4 w-16 bg-[#DCE0D9] shadow-lg backdrop-blur-sm flex flex-col items-center py-6 gap-8 z-50 border-r border-gray-200">
      {/* Logo/Brand Icon */}
      <A href="/" class="hover:scale-110 transition-transform">
        <img src="./3.svg" alt="Logo" />
      </A>
      
      {/* Home Icon */}
      <A 
        href="/" 
        class="text-gray-700 hover:text-blue-600 transition-colors my-auto"
        title="Home"
      >
        <img src="./home.svg" alt="Home Icon" />
      </A>
      
      {/* Logout Icon */}
      <A
        href="/login" 
        class="text-gray-700 hover:text-red-600 transition-colors"
        title="Logout"
      >
        <img src="./log-in.svg" alt="Logout Icon" />
      </A>
    </aside>
  );
}
