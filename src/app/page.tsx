"use client";
import Loading from "@/components/common/loading";
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
    return <Loading />;
  }

  return (
    <main>
      <Header />
      <div className=" flex justify-center items-center mt-40">
        <div className=" p-5">
          <h1 className=" text-xl text-bold ">
            Welcome, {session?.user?.name}! You are logged in.
          </h1>
        </div>
      </div>
    </main>
  );
}
