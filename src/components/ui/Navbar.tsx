import { AppBar, Toolbar, Stack } from "@mui/material";
import ProfileMenu from "./ProfileMenu";
import Logo from "./Logo";
import ToggleTheme from "@/components/button/ToggleTheme";

interface NavbarProps {
  username: string | null | undefined;
}

export default function Navbar({ username }: NavbarProps) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        // boxShadow: "none",
      }}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          flexGrow={1}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack ml={1.5}>
            <Logo size={150} image="logo" />
          </Stack>
          <Stack
            ml={1.5}
            direction={"row"}
            color={"var(--foreground)"}
            fontSize={18}
            fontWeight={"medium"}
            alignItems={"center"}
          >
            <ToggleTheme />
            {username}
            <ProfileMenu username={username} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
