import { Box, Stack } from "@mui/material";
import { auth } from "@/lib/auth";
import Navbar from "@/components/ui/Navbar";
import { Suspense } from "react";
import Loading from "../loading";
import Sidebar from "@/components/ui/Sidebar";

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
      <Navbar username={username} />
      <Stack direction="row" height={1}>
        {/* Left Side - Sidebar */}
        <Sidebar isAdmin={session?.user?.role === "admin"} company={"OffyOk"} />

        {/* Right Side */}
        <Stack height={1} flexGrow={1}>
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
    </Stack>
  );
}
