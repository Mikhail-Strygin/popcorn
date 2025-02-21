import { Box } from "../../Box/ui/Box";
import { Error } from "../../Error/ui/Error";
import { List } from "../../List/ui/List";
import { MovieItem } from "./MovieItem";
import { Spinner } from "../../Spinner";

export function MovieBlock({
  isLoading,
  error,
  movies,
  activeMovie,
  setActiveMovie,
}) {
  return (
    <Box>
      {error && <Error msg={error} />}
      {isLoading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      <List className="list-movies">
        {movies &&
          movies.map((item) => (
            <MovieItem
              key={item.imdbID}
              movie={item}
              isActive={activeMovie === item.imdbID ? true : false}
              setActiveMovie={setActiveMovie}
            />
          ))}
      </List>
    </Box>
  );
}
