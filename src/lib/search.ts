import type { TMDBResponseResult } from "@/types/tmdb";

export async function getSearch(name: string | null) {
  if (!name) {
    return;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      options,
    );

    const data = await response.json();
    const movies = data.results as TMDBResponseResult[];

    console.log("movies", movies);
    console.log("env", import.meta.env.TMDB_ACCESS_TOKEN);

    return movies;
  } catch (e) {
    console.log(e);
  }
}
