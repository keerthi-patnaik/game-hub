import { useFetchGenres } from '../hooks/useFetchGenres';

const GenreList = () => {
  const { error, isLoading, genres } = useFetchGenres();
  return (
    <ul>
      {genres.map(genre => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
