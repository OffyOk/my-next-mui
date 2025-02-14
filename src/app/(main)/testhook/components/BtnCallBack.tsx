"use client";

import { Paper, Stack } from "@mui/material";
import { useCallback, useState } from "react";

function Button({ onClick }: { onClick: () => void }) {
  console.log("🎯 Render Button");
  return <button onClick={onClick}>Click Me</button>;
}
function ButtonCall({ onClick }: { onClick: () => void }) {
  console.log("🎯 Render Button Callback");
  return <button onClick={onClick}>Click Me Callback</button>;
}

export default function BtnCallBack() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked!");
  };
  const handleClickCall = useCallback(() => {
    console.log("Clicked Callback!");
  }, []);

  return (
    <Paper sx={{ m: 2, p: 5 }}>
      <Stack direction={"row"} spacing={2}>
        <p>Count: {count}</p>
        <Button onClick={handleClick} />
        <ButtonCall onClick={handleClickCall} />
        <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      </Stack>
    </Paper>
  );
}
