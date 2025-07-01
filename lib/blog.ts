import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMetadata } from '../types/blog';

const postsDirectory = path.join(process.cwd(), '/posts');

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.(md)$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return parsePost(fileContents, slug);
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts: BlogPostMetadata[] = [];
  
  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) {
      // Return metadata only for the feed
      posts.push({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        publishedAt: post.publishedAt,
        tags: post.tags,
        slug: post.slug,
        featuredImage: post.featuredImage,
      });
    }
  }
  
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

function parsePost(fileContents: string, slug: string): BlogPost {
  const { data, content } = matter(fileContents);
  
  return {
    id: data.id || slug,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || content.substring(0, 160) + '...',
    content,
    author: data.author || 'Anonymous',
    publishedAt: data.date || new Date().toISOString(),
    updatedAt: data.updatedAt,
    tags: data.tags || [],
    slug,
    featuredImage: data.featuredImage,
  };
}
