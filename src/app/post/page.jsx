import React from "react";
import Link from "next/link";
import Image from "next/image";

//https://jsonplaceholder.typicode.com/photos
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {data.map((item) => (
        <Link
          href={`/post/${item.id}`}
          key={item.id}
          className="flex flex-col md:flex-row items-center gap-12 mb-12 group"
        >
          {/* Image */}
          <div className="w-full md:w-[400px] h-[250px] relative overflow-hidden rounded-md">
            <Image
              src='' // using placeholder
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h1>
            <p className="text-gray-500 text-base">{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
