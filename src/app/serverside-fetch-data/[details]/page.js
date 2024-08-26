async function getUserDetails(userId) {
  try {
    let res = await fetch(`https://dummyjson.com/users/${userId}`);
    let result = await res.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function userDetails({ params }) {
  let fetchedUserDetails = await getUserDetails(params?.details);
  console.log(fetchedUserDetails);
  return <>userDetails</>;
}
