import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(4, "Full Name must be at least 4 characters"),
    phone: z.string().min(9, "phone must be at least 9 digits"),
    company: z.string().min(3, "Company Name must be at least 3 characters"),
    username: z.string().min(4, "Username must be at least 4 characters"),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;