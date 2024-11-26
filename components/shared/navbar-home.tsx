import { auth } from "@/auth";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui";
import { Button } from "../ui/button";
import { Logo } from "./logo";

export const NavbarHome = async () => {
  const session = await auth();

  return (
    <header className="bg-black/90">
      <nav className="container flex items-center justify-between px-2 py-4 mx-auto">
        <Logo className="text-white" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon
              size={24}
              className="cursor-pointer md:hidden text-white"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              {session && (
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}

              {!session && (
                <Link href="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="items-center hidden gap-1 md:flex">
          {session && (
            <Link href="/dashboard">
              <Button variant="link" className="text-white">
                Dashboard
              </Button>
            </Link>
          )}

          {!session && (
            <Link href="/login">
              <Button variant="secondary">Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
