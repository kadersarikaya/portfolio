"use client"
import React, { useState, useEffect } from "react";
import { client } from "@/lib/contentful/client";
import Link from "next/link";

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "blogPost",
                });

                setBlogPosts(response.items);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    // ...

return (
  <section className="mx-auto max-w-4xl px-4 pb-5 justify-center flex flex-col items-start md:items-center">
    <h1 className="text-2xl pb-14">Blog & Notes</h1>

    <div className="flex flex-col gap-8">
      {blogPosts?.map((post) => (
        <Link href={`/blog/${post.fields.slug}`} key={post.sys.id}>
          <div className="cursor-pointer">
            <h1 className="font-semibold">{post.fields.title}</h1>
            <p className="text-gray-400">{post.fields.postTag}</p>
            <div className="flex gap-2 text-gray-400 text-sm">
              <div>{post.fields.postEntryDate.toString().slice(0, 10)}</div>
              <div className="align-middle">.</div>
              <div>{post.fields.minRead} min read</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

// ...

};



export default Blog;
