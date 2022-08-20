import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainInfo(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef(null);
  useEffect(() => {
    ref.current.value = searchParams.get('q');
  }, []);
  const handleSearch = (ev) => {
    const q = ev.target.value;
    const key = 'title';
    setSearchParams(q ? { [key]: q } : {});
  };
  return (
    <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
      <h1 className="mb-3 text-4xl font-bold tracking-tight text-primary lg:text-5xl">
        Hola! welcome guys.
      </h1>
      <p className="text-lg font-medium tracking-wide">
        You can search anything on my blog
      </p>
      <input
        type="search"
        placeholder="Search here..."
        className="input input-primary rounded-box mt-5 w-full max-w-sm"
        onChange={handleSearch}
        ref={ref}
        onFocus={props.onSearchFocus}
        onBlur={props.onSearchBlur}
      />
    </div>
  );
}
