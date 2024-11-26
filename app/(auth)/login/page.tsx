import { auth } from "@/auth";
import { AuthLoginForm } from "@/components/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <>
      <div className="w-full max-w-sm mt-12 rounded-2xl bg-white/10 backdrop-blur-sm border space-y-4 p-7">
        <h2 className="text-xl font-bold">Boas Vindas</h2>
        <p>Faça seu login com email e senha.</p>

        <AuthLoginForm />
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Não possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/cadastro">
          Registre-se
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
