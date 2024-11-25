"use client";

import { loginAction } from "@/app/(auth)/login/login-action";
import Form from "next/form";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const AuthLoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <>
      {state?.success === false && (
        <div className="bg-red-500 mb-2 rounded text-white flex items-center gap-2 p-4">
          <strong>Erro !</strong>
          <span>{state.message}</span>
        </div>
      )}

      <Form action={formAction}>
        <div>
          <Label className="text-xs">Email</Label>
          <Input type="email" name="email" placeholder="johndoe@email.com" />
        </div>
        <div>
          <Label className="text-xs">Senha</Label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <Button className="w-full mt-6" type="submit" disabled={isPending}>
          <span>{isPending ? "Carregando..." : "Entrar"}</span>
        </Button>
      </Form>
    </>
  );
};
