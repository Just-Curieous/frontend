import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '../types/blog';

interface BlogCardProps {
  post: BlogPostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-stone-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-white mb-2">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 hover:text-orange-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">by</span>
            <span className="text-sm font-medium text-white">{post.author}</span>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}