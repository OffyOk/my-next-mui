import { Button } from "@mui/material";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      Dashboard
      <Link href={`/home`}>
        <Button>Back Home</Button>
      </Link>
    </>
  );
};

export default DashboardPage;
