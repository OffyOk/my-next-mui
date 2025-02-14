import { UserSchema } from "@/hooks/useFormValidation";
import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

type FormInputProps = {
  name: keyof UserSchema;
  control: Control<UserSchema>;
  label: string;
  type?: string;
};

export default function FormInput({
  name,
  control,
  label,
  type = "text",
}: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error ? error.message : ""}
          fullWidth
        />
      )}
    />
  );
}
