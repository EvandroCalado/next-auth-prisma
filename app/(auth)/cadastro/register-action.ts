"use server";

import { db } from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { z } from "zod";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export const registerAction = async (_prevState: unknown, data: FormData) => {
  const entries = Object.fromEntries(data) as FormDataProps;

  // verificar se os campos estão preenchidos
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

  // verificar se usuário já existe no banco de dados
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

  // criar usuário no banco de dados
  await db.user.create({
    data: {
      name: entries.name,
      email: entries.email,
      password: hashSync(entries.password),
    },
  });
};
