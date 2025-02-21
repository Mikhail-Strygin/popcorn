import { useEffect, useRef, useState } from "react";
import { getMovies } from "../api";

export function useGetMovies() {
  const [numResults, setNumResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  const [activeMovie, setActiveMovie] = useState(null);
  const abortController = useRef(null);

  async function searchHandler(value) {
    if (!value) {
      setError();
      setNumResults(0);
      return;
    }

    if (abortController.current) {
      abortController.current.abort();
    }

    const controller = new AbortController();
    abortController.current = controller;

    setIsLoading(true);
    setError();
    try {
      const data = await getMovies(value, controller);

      if (data.Response === "False")
        throw new Error("Can't find some movies 🥹");

      // !data ? setError(true) : setIsError(false);
      setMovies(data.Search); // setMovies(data?.Search || []);
      setNumResults(data?.totalResults || 0);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error);
        setMovies([]);
        setError(error.message);
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    console.log("component did mount");
    if (activeMovie !== null) {
      console.log("componentDidUpdate");
    }
  }, [activeMovie]);
  return {
    searchHandler,
    numResults,
    isLoading,
    error,
    movies,
    activeMovie,
    setActiveMovie,
  };
}
