"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { Button } from "@mui/material";

const ToggleTheme = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  console.log("toggleTheme");
  return <Button onClick={toggleTheme}>{isDarkMode ? "Light" : "Dark"}</Button>;
};

export default ToggleTheme;
