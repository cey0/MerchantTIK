export default function CardLogin() {
  return (
    <div class="Login-Container">
      <div class="Login-Card bg-gray-200 rounded-[40px] flex flex-col p-12 px-15 shadow-lg">
        <h2 class="Login-Title text-[24px] font-semibold">Sign In</h2>
        <h3 class="Login-Deskripsi mt-5 text-[14px]">
          Silahkan masuk dengan email anda <br />
          untuk mengakses marketplace TIKREX
        </h3>
        <div class="Login-Input mt-5">
          <div class="username-input flex flex-col bg-blue-200 rounded p-2 mb-2 shadow-md">
            <input placeholder="Username" type="text" />
          </div>
          <div class="username-input flex flex-col bg-blue-200 rounded p-2 shadow-md">
            <input placeholder="Password" type="text" />
          </div>
        </div>

        <div class="button-login mt-5 flex flex-col justify-center items-center text-center text-white ">
          <a href="" class="bg-blue-500 w-full rounded-full py-1 hover:bg-blue-700">login</a>
        </div>
      </div>
    </div>
  );
}
