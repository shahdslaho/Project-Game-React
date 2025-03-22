/* eslint-disable react/prop-types */
import useGenres from "../../hooks/useGenres";
import LoadingSpinner from "../LoadingSpinner";
import GenreButton from "./GenreButton";
/// Game genre button list component 
const GenreList = ({ onSelectGenre }) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className=" flex flex-wrap justify-center lg:flex-col lg:items-start p-4">
      {data?.results?.map((genre) => (
        <GenreButton key={genre.id} genre={genre} onSelectGenre={onSelectGenre} />
      ))}
    </div>
  );
};

export default GenreList;