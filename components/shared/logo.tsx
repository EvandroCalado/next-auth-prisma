import { cn } from "@/lib/utils";
import { Fingerprint } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
    >
      <Fingerprint /> Next Auth
    </Link>
  );
};
