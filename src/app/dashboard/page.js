"use client"

import { usePathname, useSearchParams } from "next/navigation"

export default function Dashboard() {
const pathName=usePathname()
const searchParams=useSearchParams()
console.log(pathName,"pathname")
console.log(searchParams.get("search"),searchParams.get("random"))

    return (
        <>Dashboard</>
    )
}