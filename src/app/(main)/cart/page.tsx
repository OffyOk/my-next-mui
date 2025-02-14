"use client";
import { useCartStore } from "@/stores/useCartStore";
import { Button, Stack, Typography } from "@mui/material";
import Cart from "./components/Cart";
import dayjs from "dayjs";
import Link from "next/link";

export default function CartPage() {
  const { addItem } = useCartStore();
  return (
    <Stack>
      <Typography variant="h4">Products</Typography>
      <Button
        onClick={() =>
          addItem({
            id: dayjs().toString() + Math.random(),
            name: "T-Shirt",
            price: 10,
          })
        }
      >
        Add T-Shirt to Cart
      </Button>
      <Cart />
      <Link href={`/home`}>
        <Button>Back Home</Button>
      </Link>
    </Stack>
  );
}
