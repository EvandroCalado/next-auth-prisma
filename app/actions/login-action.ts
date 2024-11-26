"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const loginAction = async (_prevState: unknown, data: FormData) => {
  try {
    await signIn("credentials", {
      email: data.get("email") as string,
      password: data.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard",
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Credenciais inválidas.",
            success: false,
          };
        default:
          return {
            message: "Erro ao fazer login.",
            success: false,
          };
      }
    }
    throw error;
  }
};
