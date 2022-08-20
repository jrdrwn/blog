import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogCard from '../components/home/BlogCard';
import Footer from '../components/home/Footer';
import MainImage from '../components/home/MainImage';
import MainInfo from '../components/home/MainInfo';
import NotFound from '../components/home/NotFound';
import SearchImage from '../components/home/SearchImage';
import postsJson from '../assets/posts.json';
import ThemeSwitcher from '../components/utils/ThemeSwitcher';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setSearchFocused(true);

    setPosts(
      postsJson.filter((post) => {
        const q = searchParams.get('title');
        return q ? post.title.match(q) : true;
      })
    );
    setSearchFocused(false);
  }, [searchParams]);
  return (
    <>
      <section className="rounded-b-box bg-gradient-to-tl from-primary/25 via-base-100 to-secondary/10 pt-10 pb-10 md:pb-0">
        <div className="container relative mx-auto flex flex-col-reverse px-4 md:flex-row md:justify-between">
          <ThemeSwitcher />
          <MainInfo />
          <MainImage />
        </div>
      </section>
      <section className="bg-base-200 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {posts.length ? (
              posts.map((post) => <BlogCard {...post} key={post._id} />)
            ) : searchFocused ? (
              <SearchImage />
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
