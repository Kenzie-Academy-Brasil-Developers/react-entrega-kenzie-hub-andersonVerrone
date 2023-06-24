import { z } from "zod";

export const modalEditSchema = z.object({
    status: z.string().min(1, "O módulo é obrigatório."),
})