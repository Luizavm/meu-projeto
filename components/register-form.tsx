'use client'

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {
          setLoading(true);
          setError("");
        },
        onResponse: () => setLoading(false),
        onSuccess: () => redirect("/dashboard"),
        onError: (ctx) => setError(ctx.error.message),
      }
    );
  }

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-sm p-6 bg-card rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Crie sua conta</h2>

      <div>
        <label className="text-sm font-medium">Nome</label>
        <Input name="name" type="text" required placeholder="Seu nome" />
      </div>

      <div>
        <label className="text-sm font-medium">E-mail</label>
        <Input name="email" type="email" required placeholder="seu@email.com" />
      </div>

      <div>
        <label className="text-sm font-medium">Senha</label>
        <Input name="password" type="password" required placeholder="********" />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Criando conta..." : "Registrar"}
      </Button>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <p className="text-sm text-center">
        Já tem uma conta?{" "}
        <a href="/login" className="text-primary underline">
          Faça login
        </a>
      </p>
    </form>
  );
}
