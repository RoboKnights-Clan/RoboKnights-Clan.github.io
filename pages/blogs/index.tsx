/* eslint-disable @next/next/no-img-element */
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { NextPage } from "next";
import Layout from "../../components/Layout/Layout";

const BlogsPage: NextPage = ({ posts }: any) => {
  return (
    <Layout title="Blogs">
      <div className="container mx-auto md:px-24 px-5 py-8">
        <div className="flex flex-col w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold  mb-2 text-gray-900 dark:text-white">
            Blogs
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-4 dark:text-gray-e9">
            We at RoboKnights not only focus on accolades and competitions but
            also thrive to help our fellow members and other enthusiasts out
            there to increase their knowledge in the growing field of robotics.
            For this sole purpose, we have made the following resources to
            enrich any and all interested.
          </p>
        </div>
        <div>
          {posts.map((post: any, index: number) => (
            <div
              className="border-2 rounded-md border-black dark:border-white p-5 mb-4"
              key={index}
            >
              <h1 className="sm:text-2xl text-xl mb-2 font-semibold text-gray-900 dark:text-white">
                {post.frontmatter.title}
              </h1>
              <h2 className="sm:text-lg text-md font-medium text-gray-900 dark:text-white">
                {post.frontmatter.date}
              </h2>
              <h2 className="sm:text-lg text-md mb-2 font-medium text-gray-900 dark:text-white">
                {post.frontmatter.author}
              </h2>
              <p className="text-lg font-normal mb-2">
                {post.frontmatter.excerpt}
              </p>
              <Link href={`/blogs/${post.slug}`}>
                <a className="underline text-lg">Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;

export async function getStaticProps() {
  // Get files from the directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from each file
  const posts = files.map((file) => {
    // Create a slug
    const slug = file.replace(".md", "");

    // Get frontmatter
    const markDownWithMeta = fs.readFileSync(path.join("posts", file), "utf8");

    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
