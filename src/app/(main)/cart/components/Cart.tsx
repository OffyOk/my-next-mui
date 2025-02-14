"use client";
import { useCartStore } from "@/stores/useCartStore";
import { Button } from "@mui/material";

export default function Cart() {
  const { cart, removeItem } = useCartStore();
  console.log(cart);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <Button onClick={() => removeItem(item.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
