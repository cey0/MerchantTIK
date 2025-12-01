import { useNavigate } from "@solidjs/router";
import { isLoggedIn, setIsLoggedIn } from "~/authStore";

export default function CardLogin() {
  const navigate = useNavigate();

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
        <a
          href="/auth/forgot-password"
          class="w-full text-end rounded-full my-2"
        >
          Lupa password?
        </a>
        <div class="button-login mt-1 flex flex-col justify-center items-center text-center text-white ">
          <button
            class="bg-[#3683D0] rounded p-2 hover:bg-blue-700 cursor-pointer shadow-md w-full"
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/");
              console.log(isLoggedIn());
            }}
          >
            Log in
          </button>
        </div>
        <div class="mt-2 text-center text-sm">
          Belum punya akun?{" "}
          <a href="/auth/register" class="italic hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
