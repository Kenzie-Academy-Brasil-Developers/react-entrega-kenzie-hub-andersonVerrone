import { z } from "zod";

export const modalCreateSchema = z.object({
    title: z.string().min(1,"Insira o nome da tecnologia!"),
    status: z.string().min(1, "O módulo é obrigatório."),
})