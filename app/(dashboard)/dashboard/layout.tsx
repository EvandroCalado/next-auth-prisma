import { auth } from "@/auth";
import { NavbarDashboard } from "@/components/shared";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  const userName = session?.user?.name;

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarDashboard userName={userName ?? ""} />
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
