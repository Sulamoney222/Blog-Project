import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          key={item.id}
          className="block bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <div className="relative w-full h-60">
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h1>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
