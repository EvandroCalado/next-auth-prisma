# Next.js Authentication Boilerplate

Este é um boilerplate completo para autenticação em aplicações Next.js, utilizando **Auth.js** (antigo NextAuth.js) para gerenciamento de autenticação, **Prisma** para comunicação com banco de dados e **MySQL** rodando em um container via **Docker Compose**.

## 🚀 Funcionalidades

- Autenticação completa com suporte a credenciais.
- Banco de dados MySQL configurado para persistência de usuários e sessões.
- Integração com Prisma para manipulação e consultas ao banco de dados.
- Ambiente isolado com Docker Compose para fácil configuração e deploy.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor.
- **Auth.js**: Biblioteca para autenticação.
- **Prisma**: ORM para comunicação com o banco de dados.
- **MySQL**: Banco de dados relacional.
- **Docker Compose**: Gerenciamento de containers para fácil configuração.

---

## 🏗️ Configuração

### 1. Pré-requisitos

- **Node.js** (v20 ou superior)
- **Docker** e **Docker Compose**
- **npm**, **yarn** ou **pnpm**

### 2. Clonar o repositório

```bash
git clone https://github.com/EvandroCalado/next-auth-prisma
cd next-auth-prisma
```

### 3. Configurar variáveis de ambiente

Renomei o arquivo `.env.example` na raiz do projeto para .env:

```.env
DATABASE_URL="mysql://root:root@localhost:3306/next_auth"
```

Renomei o arquivo `.env.local.example` na raiz do projeto para .env.local e adicione um secret:

```.env.local
AUTH_SECRET="secret"
```

### 4. Subir o ambiente Docker

Inicie o banco de dados com o Docker Compose:

```bash
docker-compose up -d
```

### 5. Configurar o Prisma

Sincronize o esquema do Prisma com o banco de dados:

```bash
npx prisma db push
# ou
npx prisma migrate dev
```

Opcionalmente, visualize os dados com o Prisma Studio:

```bash
npx prisma studio
```

### 6. Instalar dependências

Instale as dependências do projeto:

```bash
npm install
```

### 7. Rodar o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Configuração de Autenticação

Por padrão, o boilerplate está configurado para usar autenticação por credenciais. Você pode adicionar provedores OAuth (Google, GitHub, etc.) no arquivo `auth.ts` na raíz do projeto.

Exemplo de configuração com Google:

```typescript
import GoogleProvider from "next-auth/providers/google";

providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
],
```

Certifique-se de adicionar as variáveis de ambiente correspondentes no arquivo `.env`.

---

## 📖 Recursos Adicionais

- **[Next.js Documentation](https://nextjs.org/docs)**
- **[Auth.js Documentation](https://authjs.dev/)**
- **[Prisma Documentation](https://www.prisma.io/docs)**
- **[Docker Documentation](https://docs.docker.com/)**

---

## 🧑‍💻 Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests para melhorias neste boilerplate.

---

## 📝 Licença

Este projeto é licenciado sob a [MIT License](./LICENSE).
