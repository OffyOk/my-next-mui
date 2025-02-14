"use client";
import { Button } from "@mui/material";
import axios from "axios";

const TestButton = () => {
  return <Button onClick={() => axios.get("api/test")}>Test Log</Button>;
};

export default TestButton;
