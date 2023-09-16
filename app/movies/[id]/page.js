import Sidebar from "../Sidebar";
import Details from "./Details";
export const dynamicParams = true;

const getMovieDetails = async (params) => {
  const { id } = params;
  const ApiLink = process.env.BASE_URL;
  const ApiKey = process.env.API_KEY;
  const token = process.env.AUTH_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    params: {
      api_key: ApiKey,
    },
    next: { revalidate: 300 },
  };

  const response = await fetch(`${ApiLink}/movie/${id}`, options);
  return response.json();
};

const MovieDetails = async (params) => {
  const details = await getMovieDetails(params);

  return (
    <div className="details">
      <Sidebar />
      <Details />
    </div>
  );
};

export default MovieDetails;
