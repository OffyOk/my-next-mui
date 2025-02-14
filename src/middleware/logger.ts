import winston from "winston";
import path from "path";
import dayjs from "dayjs";

// ตั้งค่าการเขียน path และ ชื่อ ของ Log
const logFileName = `${dayjs().format("YYYY-MM-DD")}_frontend.log`;
const logFilePath = path.join(process.cwd(), "logs", logFileName);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: logFilePath }),
    new winston.transports.Console(), // แสดงผลใน Console ด้วย
  ],
});

export default logger;
