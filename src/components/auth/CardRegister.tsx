export default function CardRegister() {
  return (
    <div class="Register-Container">
      <div class="Register-Card bg-[#DCE0D9] rounded-[40px] flex flex-col p-12 px-15 shadow-2xl">
        <h2 class="Register-Title text-3xl font-semibold">Sign Up</h2>
        <h3 class="Register-Deskripsi mt-5 text-base">
          Daftar dengan email anda <br />
          untuk mengakses marketplace TIKREX
        </h3>
        <div class="Register-Input mt-5">
          <form action="">
            <div class="email-input text-white flex flex-col bg-[#98C0E7] rounded px-4 py-1 mb-2 shadow-md text-base">
              <input placeholder="Email" type="text" />
            </div>
            <div class="password-input flex text-white flex-col bg-[#98C0E7] rounded px-4 py-1 shadow-md text-base">
              <input placeholder="Password" type="password" />
            </div>
          </form>
        </div>
        <div class="button-register mt-2 flex flex-col justify-center items-center text-center text-white ">
          <a href="/home" class="bg-[#3683D0] text-base w-full rounded-md py-2 my-3 hover:bg-[#1866b4]">Sign Up</a>
        </div>
        <div class=" text-center text-sm">
          Sudah punya akun? <a href="/auth/login" class="italic hover:underline">Log in</a>
        </div>
      </div>
    </div>
  );
}
