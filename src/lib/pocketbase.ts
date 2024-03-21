import type { MoviesResponse, TypedPocketBase } from "@/types/pocketbase";

export async function getMovies(
  pb: TypedPocketBase,
): Promise<MoviesResponse[]> {
  if (!pb.authStore.model) {
    return [];
  }

  let movies: MoviesResponse[] = [];

  try {
    let result = await pb.collection("movies").getList(1, 10, {
      filter: `user_id="${pb.authStore.model.id}"`,
    });
    movies = result.items;
  } catch (e) {
    console.log(e);
  }

  return movies;
}

export async function getMovie(
  pb: TypedPocketBase,
  id: string,
): Promise<MoviesResponse> {
  let movie = {} as MoviesResponse;

  try {
    let result = await pb.collection("movies").getOne(id);
    movie = result;
  } catch (e) {
    console.log(e);
  }

  return movie;
}
