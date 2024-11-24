'use server';

import { db } from '@/lib/db';
import { hashSync } from 'bcrypt-ts';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export const registerAction = async (data: FormData) => {
  const entries = Object.fromEntries(data) as FormDataProps;

  //   verificar se os campos estão preenchidos
  if (!entries.name || !entries.email || !entries.password) {
    throw new Error('Preencha todos os campos!');
  }

  // verificar se usuário já existe no banco de dados
  const user = await db.user.findUnique({
    where: {
      email: entries.email,
    },
  });

  if (user) {
    throw new Error('Usuário ja cadastrado!');
  }

  //   criar usuário no banco de dados
  await db.user.create({
    data: {
      name: entries.name,
      email: entries.email,
      password: hashSync(entries.password),
    },
  });
};
