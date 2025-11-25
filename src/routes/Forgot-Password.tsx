import CardForgotPassword from "~/components/CardForgotPassword";

export default function Login() {
  return (
    <div class="min-h-screen relative bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B] flex items-center justify-center">
      <header class="absolute top-6 left-6">
        <img src="/1.svg" alt="TIKREX logo" class="h-20 object-contain" />
      </header>

      <CardForgotPassword />
    </div>
  );
}
