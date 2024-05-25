"use client";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.data?.user) {
    authContent = (
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.data.user.image || ""}/>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col p-4 gap-5">
              <h2 className="font-semibold">
                {session.data?.user.email}
              </h2>
              <form action={actions.signOut}>
                <button type="submit" className="border border-red-500 text-red-500 flex items-center gap-2 px-2 py-1 rounded-md">
                  Sign Out
                  <LogOutIcon size="20px"/>
                </button>
              </form>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return authContent;
}
