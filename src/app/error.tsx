"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">เกิดข้อผิดพลาด</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
      >
        ลองอีกครั้ง
      </button>
    </div>
  );
}
