import { z } from "zod"

export const FormCreateTechSchema = z.object({
    title: z.string().min(1, "Esse campo é obrigatório!"),
    status: z.string().min(1, "Esse campo é obrigatório!")
})