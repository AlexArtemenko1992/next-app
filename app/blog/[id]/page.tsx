import { Metadata } from "next";

interface PostProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  return data.json();
};

export const generateMetadata = async ({
  params: { id },
}: PostProps): Promise<Metadata> => {
  const post = await getData(id);
  // return { title: `Post - ${id}` };
  return { title: post.title };
};

const Post = async ({ params: { id } }: PostProps) => {
  const post = await getData(id);
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
