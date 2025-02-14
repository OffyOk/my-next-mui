import { Button, Container } from "@mui/material";
import UserFormPage from "./components/UserFormPage";
import TestButton from "@/components/button/TestButton";
import { auth } from "@/lib/auth";
import { hasPermission } from "@/utils/permission";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();

  return (
    <Container maxWidth={"lg"}>
      <TestButton />
      <Link href={`/testhook`}>
        <Button variant="contained">Test Hook</Button>
      </Link>
      <Link href={`/cart`}>
        <Button>Go to Cart</Button>
      </Link>
      {hasPermission(session?.user.role, "view_reports") ? (
        <Link href={`/dashboard`}>
          <Button>Go to Dashboard</Button>
        </Link>
      ) : null}
      <UserFormPage />
    </Container>
  );
}
