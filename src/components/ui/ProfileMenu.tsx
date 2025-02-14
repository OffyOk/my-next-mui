"use client";

import { signOut } from "next-auth/react";
import { Avatar, Button, Menu, MenuItem, Stack } from "@mui/material";
import { stringAvatar } from "@/utils/stringAvatar";
import { useState } from "react";

export default function ProfileMenu({
  username,
}: {
  username: string | null | undefined;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
      >
        <Avatar
          alt={username || ""}
          {...stringAvatar(username || "unknown", 32)}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
