"use client";
import { useEffect, useState } from "react";
import { client } from "@/lib/contentful/client";
import { useParams } from "next/navigation";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

const BlogPost = ({ post }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 justify-center flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">{post.fields.title}</h1>
        <p className="text-gray-500 mb-2">{post.fields.postTag}</p>
        <div className="text-gray-400 text-sm mb-4">
          {post.fields.postEntryDate.toString().slice(0, 10)} • {post.fields.minRead} min read
        </div>
        <div className="prose">
          {documentToReactComponents(post.fields.postEntry)}
        </div>
      </div>
    </div>
  );
};


const BlogPostPage = () => {
  const [post, setPost] = useState(null);
  const router = useParams();
  const slug = router.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
          "fields.slug": slug,
        });

        const fetchedPost = response.items[0];
        setPost(fetchedPost);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]); // slug değiştiğinde fetchData fonksiyonunun çalışmasını sağlar

  return <>{post && <BlogPost post={post} />}</>;
};

export default BlogPostPage;
