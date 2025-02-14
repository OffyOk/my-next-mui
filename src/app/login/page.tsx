import { Container, Stack } from "@mui/material";
import FormLogin from "./components/FormLogin";
import Logo from "@/components/ui/Logo";

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Stack height="100vh" justifyContent={"center"}>
        <Stack
          alignItems={"center"}
          width={1}
          borderRadius={2}
          boxShadow={2}
          px={3}
          py={2}
        >
          <Logo size={250} image="small-logo" mb />
          <FormLogin />
        </Stack>
      </Stack>
    </Container>
  );
}
