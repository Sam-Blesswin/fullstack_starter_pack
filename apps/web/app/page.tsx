"use client";
import { useBalance } from "@repo/store/useBalance";

export default function Page(): JSX.Element {
  const balance = useBalance();

  return (
    <div>
      hi there {balance}
      <div className="text-2xl text-red-600">Welcome To TurboRepo</div>
    </div>
  );
}
