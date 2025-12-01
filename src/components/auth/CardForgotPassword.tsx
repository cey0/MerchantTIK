export default function CardForgotPassword() {
  return (
    <div class="Forgot-Password-Container">
      <div class="Forgot-Password-Card bg-[#DCE0D9] rounded-[40px] flex flex-col p-12 px-15 shadow-2xl">
        <h2 class="Forgot-Password-Title text-3xl font-semibold">Lupa Password?</h2>
        <div class="Forgot-Password-Input mt-5">
          <form action="">
            <div class="my-2">Silahkan masukkan password baru anda</div>
            <div class="Password-input text-white flex flex-col bg-[#98C0E7] rounded px-4 py-1 mb-2 shadow-md text-base">
              <input placeholder="Password Baru" type="password" />
            </div>
            <div class="my-2">Silahkan ulangi password baru anda</div>
            <div class="Password-input flex text-white flex-col bg-[#98C0E7] rounded px-4 py-1 mb-2 shadow-md text-base">
              <input placeholder="Ulangi Password Baru" type="password" />
            </div>
          </form>
        </div>
        <div class="button-forgot-password mt-2 flex flex-col justify-center items-center text-center text-white ">
          <a href="/auth/login" class="bg-[#3683D0] text-base w-full rounded-md py-2 hover:bg-[#1866b4]">Tetapkan sebagai Password Baru</a>
        </div>
      </div>
    </div>
  );
}
