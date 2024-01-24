import type { Record } from "pocketbase";
import { pocketbase } from "./pocketbase";

export async function login(email: string, password: string) {
  try {
    const resp = await pocketbase
      .collection("users")
      .authWithPassword(email, password);
    addToStorage(resp.record);
  } catch (err) {
    console.error(err);
  }
}

function addToStorage(user: Record) {
  window.localStorage.setItem("uid", user.id);
}
