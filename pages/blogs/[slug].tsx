// @ts-nocheck

import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import type { NextPage } from "next";

const Blog: NextPage = ({
  frontmatter: { title, author, date },
  content,
}: any) => {
  return (
    <Layout title={title}>
      <div className="container mx-auto lg:px-24 px-5 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <h2 className="text-xl font-bold">
            Posted on {date} by {author}
          </h2>
        </div>
        <div
          className="prose lg:prose-xl text-dark dark:text-white"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((files) => ({
    params: {
      slug: files.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
