import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Rota protegida</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
};

export default DashboardPage;
