import { defineStore } from 'pinia';

const API_KEY = import.meta.env.VITE_API_KEY;

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Director: string;
  Plot: string;
  Genre: string;
  Runtime: string;
  Released: string;
  imdbRating: string;
}

export type Movies = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}[];

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movie: {} as Movie,
    isLoading: false,
  }),
  actions: {
    async readMovies(title: string) {
      this.isLoading = true;
      const res = await fetch(
        `https://omdbapi.com?apikey=${API_KEY}&s=${title}`,
      );
      const { Search } = await res.json();
      this.isLoading = false;
      this.movies = Search;
    },
    async readMovieDetails(id: string) {
      this.isLoading = true;
      const res = await fetch(
        `https://www.omdbapi.com?apikey=${API_KEY}&i=${id}`,
      );
      const movie: Movie = await res.json();
      this.isLoading = false;
      this.movie = movie;
    },
  },
});
