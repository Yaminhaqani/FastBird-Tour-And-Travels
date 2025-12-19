import z from "zod"

export const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits"),
    message: z.string().min(10, "Message must be at least 10 characters")
})

export type ContactFormData = z.infer<typeof contactSchema> //TypeScript now knows exactly what fields exist, no manual interfaces, no mismatch between form & validation.

//You export both because contactSchema is needed at runtime and contactFormData exists only at compile time