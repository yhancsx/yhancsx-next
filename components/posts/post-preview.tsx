import Link from 'next/link';
import PostType from '../../types/post';
import CoverImage from '../cover-image';
import DateFormatter from '../date-formatter';

export default function PostPreview({
  title,
  coverImage,
  date,
  description,
  slug,
}: Pick<PostType, 'title' | 'coverImage' | 'date' | 'description' | 'slug'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-lg font-bold mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4 text-ellipsis">{description}</p>
    </div>
  );
}
