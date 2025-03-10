import axios from "axios";

export default async function Posts() {
  const response = await axios.get("http://localhost:3000/api/user");
  //   await new Promise((r) => setTimeout(r, 2000));
  const posts = response.data;

  return (
    <div>
      {posts?.name} {posts?.email}
    </div>
  );
}
