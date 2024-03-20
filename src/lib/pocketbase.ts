import type { MoviesResponse, TypedPocketBase } from "@/types/pocketbase";

export async function getMovies(
  pb: TypedPocketBase,
): Promise<MoviesResponse[]> {
  let movies: MoviesResponse[] = [];

  try {
    let result = await pb.collection("movies").getList();
    movies = result.items;
  } catch (e) {
    console.log(e);
  }

  console.log(movies);
  return movies;
}
