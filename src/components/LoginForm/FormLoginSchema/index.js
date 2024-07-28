import { z } from "zod"

export const formLoginSchema = z.object({
    email: z.string().min(1, "Esse campo é obrigatório!").email("insira um e-mail valido!"),
    password: z.string().min(1, "Esse campo é obrigatório!")
})