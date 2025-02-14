"use client";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { LogoutRounded, Settings } from "@mui/icons-material";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  isAdmin: boolean;
  company?: string;
}
export default function Sidebar({ isAdmin, company }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/login`);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <List
      sx={{
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack height={1}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {company}
        </Typography>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "center", my: 1 }}
        >
          <Link
            href={
              company
                ? `${process.env.NEXT_PUBLIC_BASE_PATH}/business-anywhere`
                : `${process.env.NEXT_PUBLIC_BASE_PATH}/setting`
            }
          >
            <Logo size={200} image="scb_logo" />
          </Link>
        </ListItem>
        <Divider sx={{ boxShadow: 1, mb: 1 }} />

        {company && (
          <ListItem disablePadding>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/business-anywhere`}
              passHref
              className="w-full"
            >
              <ListItemButton
                selected={
                  pathname ===
                  `${process.env.NEXT_PUBLIC_BASE_PATH}/business-anywhere`
                }
                sx={{ my: "4px" }}
              >
                <ListItemIcon>
                  <LogoutRounded sx={{ transform: "rotate(270deg)" }} />
                </ListItemIcon>
                <ListItemText primary={"Business Anywhere"} />
              </ListItemButton>
            </Link>
          </ListItem>
        )}
        {isAdmin && (
          <ListItem disablePadding>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_PATH}/setting`}
              passHref
              className="w-full"
            >
              <ListItemButton
                selected={
                  pathname === `${process.env.NEXT_PUBLIC_BASE_PATH}/setting`
                }
                sx={{ my: "4px" }}
              >
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary={"Setting"} />
              </ListItemButton>
            </Link>
          </ListItem>
        )}
        <ListItem disablePadding sx={{ flexGrow: 1, alignItems: "flex-end" }}>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutRounded />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Stack>
    </List>
  );
}
