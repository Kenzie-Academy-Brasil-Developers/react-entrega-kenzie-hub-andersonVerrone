import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(3, "O nome é obrigatório e precisa de pelo menos 3 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*?[!@#$%^&*])/, "É necessário pelo menos um caractere especial (!@#$%^&*)"),
    confirm: z.string().min(1, "A Confirmação de senha é obrigatoria"),
    bio: z.string().min(3, "O Bio é obrigatório e precisa de pelo menos 3 caracteres."),
    contact: z.string().regex(/^\d{10,11}$/, "O contato precisa ser um número de telefone válido com DDD"),
    course_module: z.string().min(1, "O módulo é obrigatório."),
}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
  })