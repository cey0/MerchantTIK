export default function CardLogin() {
  return (
    <div class="Login-Container">
      <div class="Login-Card bg-[#DCE0D9] rounded-[40px] flex flex-col p-12 px-15 shadow-2xl">
        <h2 class="Login-Title text-3xl font-semibold">Sign In</h2>
        <h3 class="Login-Deskripsi mt-5 text-base">
          Silahkan masuk dengan email anda <br />
          untuk mengakses marketplace TIKREX
        </h3>
        <div class="Login-Input mt-5">
          <form action="">
            <div class="email-input text-white flex flex-col bg-[#98C0E7] rounded px-4 py-1 mb-2 shadow-md text-base">
              <input placeholder="Email" type="text" />
            </div>
            <div class="password-input flex text-white flex-col bg-[#98C0E7] rounded px-4 py-1 shadow-md text-base">
              <input placeholder="Password" type="password" />
            </div>
          </form>
        </div>
        <a href="/auth/forgot-password" class="w-full text-end rounded-full my-2">Lupa password?</a>
        <div class="button-login mt-1 flex flex-col justify-center items-center text-center text-white ">
          <a href="/home" class="bg-[#3683D0] text-base w-full rounded-md py-2 hover:bg-[#1866b4]">Log in</a>
        </div>
        <div class="mt-2 text-center text-sm">
          Belum punya akun? <a href="/auth/register" class="italic hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
