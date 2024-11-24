'use server';

import { db } from '@/lib/db';
import { hashSync } from 'bcrypt-ts';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export const registerAction = async (prevState: unknown, data: FormData) => {
  const entries = Object.fromEntries(data) as FormDataProps;

  // verificar se os campos estão preenchidos
  if (!entries.name || !entries.email || !entries.password) {
    return {
      message: 'Preencha todos os campos!',
      success: false,
    };
  }

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  await sleep(2000);

  // verificar se usuário já existe no banco de dados
  const user = await db.user.findUnique({
    where: {
      email: entries.email,
    },
  });

  if (user) {
    return {
      message: 'Usuário ja cadastrado',
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
