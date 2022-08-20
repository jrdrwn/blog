import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSearchParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import readableDate from '../helpers/readableDate';
import postsJson from '../assets/posts.json';
import ThemeSwitcher from '../components/utils/ThemeSwitcher';

export default function Post() {
  const [post, setPost] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setPost(
      postsJson.filter(({ _id }) => _id === searchParams.get('postId'))[0]
    );
  }, []);
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col items-center gap-4 p-4">
          <article className="prose relative max-w-[65ch] prose-img:mx-auto prose-img:rounded-md lg:prose-lg">
            <ThemeSwitcher />
            <div className="badge badge-primary uppercase">{post.category}</div>
            <p className="mb-1 mt-0 lg:mt-0 lg:mb-1">
              {readableDate(post.createdAt)}
            </p>
            <h1 className="mt-1 text-primary lg:mt-1">{post.title}</h1>
            <figure>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="rounded-md object-cover object-top"
              />
            </figure>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {post.body}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}
