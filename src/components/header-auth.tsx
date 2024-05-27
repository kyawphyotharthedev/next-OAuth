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
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.data.user.image || ""} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="p-6">
              <h2 className="font-semibold mb-3">{session.data?.user.email}</h2>
              <form action={actions.signOut}>
                <Button type="submit" variant="destructive">
                  Log Out
                  <LogOutIcon size="15px" className="ml-2" />
                </Button>
              </form>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return authContent;
}
