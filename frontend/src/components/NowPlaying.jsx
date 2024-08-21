import { useState } from "react";
import bannerExample from "../assets/banner-example.jpg";
import { Link } from "react-router-dom";

export default function NowPlaying() {
  const [showCount, setShowCount] = useState(4);
  const moviesExample = [
    {
      id: 1,
      title: "Movie Title 1",
      rating: "1",
      duration: "1hr",
      genre: "Drama",
    },
    {
      id: 2,
      title: "Movie Title 2",
      rating: "2",
      duration: "2hr",
      genre: "Action",
    },
    {
      id: 3,
      title: "Movie Title 3",
      rating: "3",
      duration: "3hr",
      genre: "Comedy",
    },
    {
      id: 4,
      title: "Movie Title 4",
      rating: "4",
      duration: "4hr",
      genre: "Horror",
    },
    {
      id: 5,
      title: "Movie Title 5",
      rating: "5",
      duration: "5hr",
      genre: "Adventure",
    },
    {
      id: 6,
      title: "Movie Title 6",
      rating: "6",
      duration: "6hr",
      genre: "Romance",
    },
    {
      id: 7,
      title: "Movie Title 7",
      rating: "7",
      duration: "7hr",
      genre: "Sci-Fi",
    },
    {
      id: 8,
      title: "Movie Title 8",
      rating: "8",
      duration: "8hr",
      genre: "Thriller",
    },
    {
      id: 9,
      title: "Movie Title 9",
      rating: "9",
      duration: "9hr",
      genre: "Fantasy",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* title */}
      <article className="p-2 bg-red-600 text-white sticky top-28 z-10">
        <h1 className="text-3xl font-bold ">Now Playing</h1>
      </article>

      {/* search bar */}
      <article className="bg-red-500 text-white flex gap-5 w-full justify-center items-center py-2 sticky top-40 rounded-b-3xl">
        {/* search */}
        <section className="flex gap-5 items-center">
          <button>Search</button>
          <input
            type="text"
            placeholder="Search movies title"
            className="px-2 py-1 text-black focus:outline-none focus:border-none"
          />
        </section>
        {/* genre */}
        <section className="flex gap-5 items-center">
          <p>Genre</p>
          <select
            name="genre"
            id=""
            className="bg-red-600 text-white py-1 px-3"
          >
            <option value="genre">All</option>
            {moviesExample
              .map((movie) => movie.genre)
              .map((genre) => (
                <option value={genre} key={genre}>
                  {genre}
                </option>
              ))}
          </select>
        </section>
      </article>

      {/* movies list*/}
      <article
        className="p-5 w-full 
      flex gap-5 flex-wrap justify-around items-center flex-col"
      >
        {/* only movie without button show more or less */}
        <div className="flex gap-5 flex-wrap justify-around items-center w-full ">
          {/* movies details container */}
          {moviesExample.slice(0, showCount).map((movie) => {
            return (
              <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="flex flex-col w-1/5 items-center p-2 bg-yellow-300 rounded-b-3xl"
              >
                {/* movie banner */}
                <img src={bannerExample} alt={movie.title} className="" />
                {/* movie info */}
                <div className="flex gap-3 flex-col items-center w-full  p-3">
                  <p className="text-2xl font-bold">{movie.title}</p>
                  <div className="flex justify-between items-center w-full">
                    <p>Rating: {movie.rating}</p>
                    <p>Duration: {movie.duration}</p>
                  </div>
                  <p>Genre: {movie.genre}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* buttons container */}
        <div className="w-full flex justify-center items-center gap-3">
          {showCount < moviesExample.length && (
            <button
              onClick={() => setShowCount((prevCount) => prevCount + 4)}
              className="bg-blue-500 text-white py-2 px-4 w-1/6"
            >
              Show More
            </button>
          )}
          {showCount > 4 && (
            <button
              onClick={() => setShowCount(4)}
              className="bg-blue-500 text-white py-2 px-4 w-1/6"
            >
              Show Less
            </button>
          )}
        </div>
      </article>
    </main>
  );
}