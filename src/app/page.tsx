"use client";
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface User {
  name: string;
  email: string;
}

interface Session {
  data: {
    user: User | null;
  } | null;
  status: "authenticated" | "unauthenticated" | "loading";
}

export default function Home() {
  const { data: session, status } = useSession() as Session;

  if (status === "unauthenticated") {
    redirect("/login");
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Header />
      <div className=" flex justify-center items-center mt-40">
        <h1 className=" text-xl text-bold ">
          Welcome, {session?.user?.name}! You are logged in.
        </h1>
      </div>
    </main>
  );
}
