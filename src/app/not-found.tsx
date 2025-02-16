"use client";

import { useEffect, useState } from "react";
import { Container, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 800);

      return () => clearInterval(interval);
    } else {
      router.push(`/home`);
    }
  }, [countdown, router]);

  return (
    <Container maxWidth="lg" role="alert" aria-live="polite">
      <Stack
        component="main"
        justifyContent="center"
        alignItems="center"
        color="black"
        height="100vh"
        spacing={4}
      >
        <Typography variant="h1" aria-label="Error 404">
          404
        </Typography>
        <Typography variant="h2">Page Not Found</Typography>
        <Typography variant="h5">Could not find requested resource</Typography>
        <Typography variant="h6">
          Redirecting to home in {countdown} second{countdown !== 1 ? "s" : ""}
          ...
        </Typography>
        <Stack direction="row">
          <Button
            variant="contained"
            color="info"
            component={Link}
            href="/home"
            aria-label="Return to home page"
          >
            Return Home
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
