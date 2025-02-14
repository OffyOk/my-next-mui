import { useState } from "react";

function ExpensiveComponent({ count }: { count: number }) {
  console.log("🔄 คำนวณค่าใหม่");
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }
  return <p>Result: {sum + count}</p>;
}

export default function BtnMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
      <ExpensiveComponent count={count} />
    </div>
  );
}
