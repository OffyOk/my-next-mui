import { Box, Stack } from "@mui/material";
import { auth } from "@/lib/auth";
import Navbar from "@/components/ui/Navbar";
import { Suspense } from "react";
import Loading from "../loading";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const username =
    typeof session?.user?.username === "string" ? session?.user?.username : "";

  return (
    <Stack height={"100vh"}>
      {/* Right Side */}
      <Stack height={1}>
        <Navbar username={username} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "1.5rem",
          }}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Box>
      </Stack>
    </Stack>
  );
}
