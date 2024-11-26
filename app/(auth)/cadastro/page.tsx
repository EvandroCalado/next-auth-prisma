import { auth } from "@/auth";
import { AuthRegisterForm } from "@/components/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <>
      <div className="w-full max-w-sm mt-12 rounded-2xl bg-white/10 backdrop-blur-sm border space-y-4 p-7">
        <h2 className="text-xl font-bold">Cadastre-se</h2>
        <p>Faça seu cadastro gratuitamente.</p>

        <AuthRegisterForm />
      </div>

      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
};

export default RegisterPage;
