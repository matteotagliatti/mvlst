import type { TMDBResponseResult } from "@/types/tmdb";

export async function getSearch(name: string | null) {
  if (!name) {
    return;
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
        },
      },
    );

    const data = await response.json();
    const movies = data.results as TMDBResponseResult[];

    return movies;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch search results");
  }
}
