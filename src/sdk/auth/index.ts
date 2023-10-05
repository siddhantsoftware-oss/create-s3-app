import { apiServerUrl } from "../../_main";

export function signIn(provider: "google") {
  window.location.href = apiServerUrl + "/auth/login/" + provider;
}

export function signOut() {
  window.location.href = apiServerUrl + "/auth/sign-out";
}


