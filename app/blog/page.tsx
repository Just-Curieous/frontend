import { Metadata } from 'next';
import { getAllPosts } from '../../lib/blog';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog - Your Site Name',
  description: 'Read our latest blog posts and articles',
};

export default async function BlogPage() {
  const posts = getAllPosts();
  return <BlogPageClient posts={posts} />;
}