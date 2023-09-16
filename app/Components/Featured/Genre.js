import axios from "axios";
import { useEffect, useState } from "react";

export default function Genre({ genreIds }) {
  const [genreTitles, setGenreTitles] = useState([]);
  const ApiLink = process.env.BASE_URL;
  const key = process.env.API_KEY;
  useEffect(() => {
    axios
      .get(`${ApiLink}/genre/movie/list`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        const genres = res.data.genres;
        const genreNames = genreIds.map((genreId) => {
          const genre = genres.find((g) => g.id === genreId);
          return genre ? genre.name : "Unknown";
        });
        setGenreTitles(genreNames);
      })
      .catch((err) => console.log(err));
  }, [genreIds, key, ApiLink]);
  return <>{genreTitles.join(", ")}</>;
}
