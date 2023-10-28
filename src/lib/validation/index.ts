import * as z from 'zod'

export const SignupValidation = z.object({
    username: z.string().min(2).max(50)
})