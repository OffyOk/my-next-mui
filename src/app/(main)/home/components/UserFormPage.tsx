"use client";

import FormInput from "@/components/form/FormInput";
import useUserForm, { UserSchema } from "@/hooks/useFormValidation";
import { Button, Stack } from "@mui/material";

export default function UserFormPage() {
  const { control, handleSubmit } = useUserForm();

  const onSubmit = (data: UserSchema) => {
    console.log("Submitted Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormInput name="name" control={control} label="ชื่อ" />
        <FormInput name="email" control={control} label="อีเมล" type="email" />
        <FormInput name="age" control={control} label="อายุ" type="number" />
        <Button type="submit" variant="contained" color="primary">
          บันทึก
        </Button>
      </Stack>
    </form>
  );
}
