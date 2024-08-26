"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello next.js</h1>
      <Link href={"products"}>Navigate to product using link tag</Link>
      <button onClick={()=>router.push("/dashboard")}>Navigate using hook</button>
    </main>
  );
}
