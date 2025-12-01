import { createSignal } from "solid-js";

  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  export { isLoggedIn, setIsLoggedIn };
