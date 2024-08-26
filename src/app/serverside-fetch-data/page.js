import Link from "next/link"

async function fetchUsers(){
    try {
        const apiResponse=await fetch("https://dummyjson.com/users")
        const result =await apiResponse.json()
        return result.users
    } catch (error) {
        throw new Error(error)
    }
}
export default async function ServerSideFetchData(){
    let fetchedUsers=await fetchUsers()
    return(
        <div >
        <ul>{fetchedUsers?.length?fetchedUsers?.map((user)=><Link href={`/serverside-fetch-data/${user?.id}`} key={user?.id}><li>{user?.firstName}</li></Link>):null}</ul>
        </div>
    )
}