import logger from "@/middleware/logger";
import { NextResponse } from "next/server";

export function GET(req: Request) {
  logger.info(`GET request received at ${req.url}`);
  console.info(`GET request received at ${req.url}`);

  return NextResponse.json({ message: "Logged with Winston!" });
}
