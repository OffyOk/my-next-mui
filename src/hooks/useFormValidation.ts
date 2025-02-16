import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  age: z.coerce
    .number()
    .min(18, "Must be at least 18 years old")
    .max(120, "Invalid age"),
});

export type UserSchema = z.infer<typeof userSchema>;

export default function useUserForm() {
  return useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
    },
  });
}
