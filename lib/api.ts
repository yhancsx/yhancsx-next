import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');
const projectsDirectory = join(process.cwd(), '_projects');
const publicationsDirectory = join(process.cwd(), '_publications');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPublicationSlugs() {
  return fs.readdirSync(publicationsDirectory);
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, []))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllPublications() {
  const slugs = getPublicationSlugs();

  const publications = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, '');
      const fullPath = join(publicationsDirectory, `${realSlug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return data;
    })
    .sort((pub1, pub2) => (pub1.date > pub2.date ? -1 : 1));

  return publications;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}
