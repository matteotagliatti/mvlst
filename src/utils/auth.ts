import { pocketbase } from "./pocketbase";

export async function login(email: string, password: string) {
  try {
    const resp = await pocketbase
      .collection("users")
      .authWithPassword(email, password);
    return resp;
  } catch (err) {
    console.error(err);
  }
}

export async function logout() {
  try {
    const resp = await pocketbase.collection("users").logout();
    return resp;
  } catch (err) {
    console.error(err);
  }
}