import { Link } from 'react-router-dom';
import readableDate from '../../helpers/readableDate';

export default function Card(props) {
  return (
    <div className="group rounded-box h-full max-w-sm cursor-default transition-all hover:bg-base-100 hover:shadow hover:shadow-primary">
      {props.thumbnail && (
        <img
          className="rounded-t-box h-40 w-full object-cover object-center transition-all group-hover:rounded-b-box group-hover:-translate-y-2.5 group-hover:scale-105 group-hover:border-b group-hover:border-b-primary lg:h-48"
          src={props.thumbnail}
          alt="blog"
        />
      )}
      <div className="z-10 p-4 pt-2">
        <div className="badge badge-sm badge-primary mb-1 cursor-default hover:badge-outline">
          {props.category}
        </div>
        <div className="mb-3 line-clamp-5">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="mb-2 text-sm">{`${readableDate(props.createdAt)}`}</p>
          <p className="leading-relaxed">{props.body}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <Link
            to={`${import.meta.env.BASE_URL}post?postId=${props._id}`}
            className="link link-hover inline-flex items-center text-primary md:mb-2 lg:mb-0"
          >
            Read More
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="text-sm text-base-content">
            {Math.ceil(props.body.split(' ').length / 250)} min read
          </div>
        </div>
      </div>
    </div>
  );
}
