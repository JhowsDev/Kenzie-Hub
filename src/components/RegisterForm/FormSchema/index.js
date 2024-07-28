import { z } from "zod";

export const formRegisterSchema = z.object({
    name: z.string().min(1, "Esse campo é obrigatório!"),
    email: z.string().min(1, "Esse campo é obrigatório!").email("insira um e-mail valido!"),
    password: z.string().min(8, "A sua senha precisa ter no minimo 8 digitos")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um carácter especial"),
    confirmPassword: z.string().min(1, "Esse campo é obrigatório!"),
    bio: z.string().min(1, "Esse campo é obrigatório!"),
    contact: z.string().min(1, "Esse campo é obrigatório!"),
    course_module: z.string().min(1, "Esse campo é obrigatório!"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem!",
    path: ["confirmPassword"],
})