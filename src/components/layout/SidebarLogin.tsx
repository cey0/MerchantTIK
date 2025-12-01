import { A, useNavigate } from "@solidjs/router";
import { Show } from "solid-js";
import { isLoggedIn, setIsLoggedIn } from "~/authStore";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside class="fixed left-5 top-1/2 -translate-y-1/2 rounded-lg h-3/4 w-16 bg-[#DCE0D9] shadow-lg backdrop-blur-sm flex flex-col items-center py-6 z-50 border-r border-gray-200">
      <A href="/" class="hover:scale-110 transition-transform mb-auto">
        <img src="/3.svg" alt="Logo" />
      </A>

      {/* Group Icons */}

      <div class="flex flex-col gap-12">
        <Show when={isLoggedIn()}>
          <A
            href="/home"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            title="Shopping Cart"
          >
            <img src="/cart.svg" alt="Cart Icon" />
          </A>
        </Show>

        <A
          href="/home"
          class="text-gray-700 hover:text-blue-600 transition-colors"
          title="Home"
        >
          <img src="/home.svg" alt="Home Icon" />
        </A>
        <Show when={isLoggedIn()}>
          <A
            href="/home"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            title="List"
          >
            <img src="/list.svg" alt="List Icon" />
          </A>
        </Show>
      </div>
      <button
        onClick={() => {
          navigate("/auth/login");
          setIsLoggedIn(false);
        }}
        class="text-gray-700 hover:text-red-600 transition-colors mt-auto cursor-pointer"
        title="Profile"
      >
        <Show when={isLoggedIn()}>
          <img src="/user.svg" alt="User Icon" />
        </Show>
        <Show when={!isLoggedIn()}>
          <img src="/log-in.svg" alt="Login Icon" />
        </Show>
      </button>
    </aside>
  );
}
