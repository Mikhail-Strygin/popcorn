const API_KEY = "b1212e3a";

// export async function getMovies(query) {
//   try {
//     const resp = await fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
//     );

//     if (!resp.ok) throw new Error("Request error");

//     const data = await resp.json();
//     if (data.Response === "False") throw new Error("Can't find some movies 🥹");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getMovies(query, controller, setIsLoading, setIsError) {
//   try {
//     setIsLoading(true);
//     setIsError(false);
//     const resp = await fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
//       {
//         signal: controller.signal,
//       }
//     );

//     if (!resp.ok) throw new Error("Request error");

//     const data = await resp.json();
//     // setIsLoading(false);
//     if (data.Response === "False") throw new Error("Can't find some movies 🥹");

//     return data;
//   } catch (error) {
//     if (error.name === "AbortError") {
//       // console.log("предыдущий запрос отменен");
//       console.log(".");
//     } else {
//       setIsError(true);
//     }
//   }
// }

export async function getMovies(query, controller) {
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
      {
        signal: controller.signal,
      }
    );

    if (!resp.ok) throw new Error("Request error");

    const data = await resp.json();
    if (data.Response === "False") throw new Error("Can't find some movies 🥹");

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      // console.log("предыдущий запрос отменен");
      console.log(".");
    }
  }
}

export async function getMovieDescription(id) {
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    if (!resp.ok) throw new Error("Request error");

    const data = await resp.json();
    if (data.Response === "False") throw new Error("Can't find the movie 🥹");

    return data;
  } catch (error) {
    console.log(error);
  }
}
