import React from "react";
import { Spinner } from "../../Spinner";
import { StarRating } from "./StarRating/StarRating";
import { useGetMovieDescription } from "./model/useGetMovieDescription";
import { Error } from "../../Error/ui/Error";

export function Details({ id }) {
  const [rating, setRating] = React.useState(0);
  const { description, isLoading, errorMsg } = useGetMovieDescription(id);

  console.log(description);
  return isLoading ? (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  ) : errorMsg ? (
    <Error msg={errorMsg} />
  ) : (
    <div className="details">
      <header>
        <button className="btn-back">&larr;</button>
        <img src={description?.Poster} />
        <div className="details-overview">
          <h2>{description?.Title}</h2>
          <p>
            {description?.Released} &bull; {description?.Runtime}
          </p>
          <p>{description?.Genre}</p>
          <p>
            <span>⭐️</span>
            {description?.imdbRating} IMDb rating
          </p>
        </div>
      </header>

      {/* <p>{avgRating}</p> */}

      <section>
        <div className="rating">
          <StarRating rating={rating} setRating={setRating} />
          {!!rating && (
            <>
              <button className="btn-add">+ Add to list</button>
              <p>
                You rated with movie {rating} <span>⭐️</span>
              </p>
            </>
          )}
        </div>
        <div className="details-overview">
          <p>
            <em>{description?.Plot}</em>
          </p>
          <p>Starring actors: {description?.Actors}</p>
          <p>Directed by: {description?.Director}</p>
        </div>
      </section>
    </div>
  );
}
