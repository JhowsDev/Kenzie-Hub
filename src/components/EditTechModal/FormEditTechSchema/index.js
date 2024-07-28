import { z } from "zod"

export const FormEditTechSchema = z.object({
    title: z.string().min(1, "Esse campo é obrigatório!"),
    status: z.string().min(1, "Esse campo é obrigatório!")
})