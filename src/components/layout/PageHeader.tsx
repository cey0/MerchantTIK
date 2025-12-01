export default function PageHeader() {
  return (
    <div class="py-8 flex flex-col items-center justify-end">
      <div class="flex items-end gap-2">
        <div class="relative">
          <div class="w-24">
            <img src="./2.png" alt="TIK-REX" class="w-full h-auto" />
          </div>
        </div>
        <div class="text-black flex flex-col leading-none">
          <p class="text-sm font-varela uppercase">
            MERCHANDISE
          </p>
          <span class="text-5xl font-Gajraj -mt-10">TIKREX</span>
        </div>
      </div>
    </div>
  );
}