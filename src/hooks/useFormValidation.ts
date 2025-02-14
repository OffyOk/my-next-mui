import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "ต้องมีอย่างน้อย 3 ตัวอักษร"),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  age: z.coerce.number().min(18, "ต้องมีอายุ 18 ปีขึ้นไป"),
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
