"use server";

import { signIn } from "@/auth";

export const loginAction = async (_prevState: unknown, data: FormData) => {
  try {
    await signIn("credentials", {
      email: data.get("email") as string,
      password: data.get("password") as string,
      redirect: false,
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      return {
        message: "Credenciais inválidas",
        success: false,
      };
    }

    return {
      message: "Erro ao fazer login",
      success: false,
    };
  }
};
