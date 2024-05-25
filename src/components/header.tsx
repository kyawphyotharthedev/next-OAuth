"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderAuth from "./header-auth";
import { useSession } from "next-auth/react";

export default function Header() {
  return (
    <main>
      <div className="w-[90%] p-5 mt-2 rounded-xl border">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={"/next-logo.png"} alt="logo" width={40} height={40} />
          </Link>
          <div>
            <HeaderAuth />
          </div>
        </div>
      </div>
    </main>
  );
}
