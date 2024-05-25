"use server";

import * as auth from "@/auth";

export async function signInWithGoogle() {
  return auth.signIn("google");
}

export async function signInWithGitHub() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
