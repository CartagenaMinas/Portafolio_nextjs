import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
const es = require("date-fns/locale/es");

const blogDir = path.join(process.cwd(), "blog");

export function getPostsNames() {
  const posts = fs.readdirSync(blogDir);
  const names = posts.map((post) => post.replace(/\.md$/, ""));
  return names;
}

export function getPosts() {
  const names = getPostsNames();
  const data = names.map(getPostData);
  return data;
}

export function getPostData(file) {
  const fullPath = path.join(blogDir, `${file}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const date = format(new Date(matterResult.data.date), "MMMM d, yyyy", {
    locale: es,
  });

  return {
    content: matterResult.content,
    ...matterResult.data,
    date,
    link: file,
  };
}
