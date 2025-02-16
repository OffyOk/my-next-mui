"use client";
import { Button, Container, Stack, Typography } from "@mui/material";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

function ErrorFallback({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <Container maxWidth="sm">
          <Stack
            spacing={4}
            height="100vh"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" component="h1" color="error">
              Something went wrong!
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {error.message || "An unexpected error occurred"}
            </Typography>

            {error.digest && (
              <Typography variant="caption" color="text.secondary">
                Error ID: {error.digest}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={() => reset()}
              aria-label="Try again"
            >
              Try again
            </Button>
          </Stack>
        </Container>
      </body>
    </html>
  );
}

export default function GlobalError(props: GlobalErrorProps) {
  return <ErrorFallback {...props} />;
}
