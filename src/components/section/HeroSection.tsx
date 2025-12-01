export default function HeroSection() {
  return (
    <section class="min-h-screen w-screen relative flex flex-col items-center justify-center bg-linear-to-b from-white via-[#E4EBF3] to-[#0C507B]">
      <div class="flex gap-3">
        <div class="relative">
          <div class="w-60">
            <img src="/2.png" alt="TIK-REX" />
          </div>
        </div>
        <div class="text-black flex flex-col">
          <p class="text-[40px] leading-none font-varela">MERCHANDISE</p>
          <span class="text-[120px] leading-none font-Gajraj">TIKREX</span>
        </div>
      </div>
    </section>
  );
}
