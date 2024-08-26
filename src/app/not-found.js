import Link from "next/link";

export default function NotFound(){
    return <>
    <h1>Not Found!</h1>
    <Link href={"dashboard"}>Go to Dashboard!</Link>
    </>
}