import { Logo } from "@/components/shared";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center py-40">
      <Logo />
      {children}
    </section>
  );
};

export default AuthLayout;
