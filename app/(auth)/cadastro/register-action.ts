"use server";

import { db } from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { z } from "zod";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export const registerAction = async (_prevState: unknown, data: FormData) => {
  const entries = Object.fromEntries(data) as FormDataProps;

  const parsedCredentials = z
    .object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })
    .safeParse(entries);

  if (!parsedCredentials.success) {
    return {
      message: "Campos obrigatórios !",
      success: false,
    };
  }

  const user = await db.user.findUnique({
    where: {
      email: entries.email,
    },
  });

  if (user) {
    return {
      message: "Usuário ja cadastrado",
      success: false,
    };
  }

  await db.user.create({
    data: {
      name: entries.name,
      email: entries.email,
      password: hashSync(entries.password),
    },
  });

  return redirect("/dashboard");
};
