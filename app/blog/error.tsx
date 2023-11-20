"use client";

const ErrorPosts = ({ error }: { error: Error }) => {
  return <h1>Error...{error.message}</h1>;
};

export default ErrorPosts;
