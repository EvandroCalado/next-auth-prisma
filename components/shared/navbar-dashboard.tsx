"use client";

import { User } from "lucide-react";
import Form from "next/form";
import { logoutAction } from "../../app/actions";
import { Button } from "../ui";
import { Logo } from "./logo";

export const NavbarDashboard = ({ userName }: { userName: string }) => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
            <User size={24} /> {userName}
          </div>
          <Form action={logoutAction}>
            <Button type="submit">Logout</Button>
          </Form>
        </div>
      </nav>
    </header>
  );
};
