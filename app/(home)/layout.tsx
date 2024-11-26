import { NavbarHome } from "@/components/shared";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarHome />
      {children}
    </>
  );
};

export default RootLayout;
