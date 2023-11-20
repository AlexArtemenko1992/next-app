import { Metadata } from "next";
import Link from "next/link";

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!data.ok) {
    throw new Error("Posts no found!");
  }

  return data.json();
};

export const metadata: Metadata = { title: "Blog" };

const Blog = async () => {
  const posts = await getData();
  return (
    <div>
      <h1>Blog Page</h1>
      {posts.map((el: any) => (
        <div key={el.id}>
          <Link href={`/blog/${el.id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
