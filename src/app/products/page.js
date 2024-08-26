import { redirect } from "next/navigation";

export default function Products(){
    let userInfo=false;
    if(!userInfo) redirect("account?search=products1&random=test")
    return <>Products</>
}