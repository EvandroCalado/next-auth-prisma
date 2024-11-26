"use client";

import { registerAction } from "@/app/actions";
import Form from "next/form";
import { useActionState } from "react";
import { Button, Input, Label } from "../ui";

export const AuthRegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
      {state?.success === false && (
        <div className="flex items-center gap-2 p-4 mb-2 text-white bg-red-500 rounded">
          <strong>Erro!</strong>
          <span>{state.message}</span>
        </div>
      )}

      <Form action={formAction}>
        <div>
          <Label className="text-xs">Nome</Label>
          <Input type="text" name="name" placeholder="John Doe" />
        </div>
        <div>
          <Label className="text-xs">Email</Label>
          <Input type="email" name="email" placeholder="johndoe@email.com" />
        </div>
        <div>
          <Label className="text-xs">Senha</Label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <Button className="w-full mt-6" type="submit" disabled={isPending}>
          <span>{isPending ? "Registrando..." : "Registrar"}</span>
        </Button>
      </Form>
    </>
  );
};
