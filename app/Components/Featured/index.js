import Image from "next/image";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Genre from "./Genre";
import ImageComp from "../ImageComp";

export default function Featured() {
  const [movies, setMovies] = useState([]);
  const ApiLink = process.env.BASE_URL;
  const ApiKey = process.env.API_KEY;
  const imgUrl = process.env.IMG_URL;

  useEffect(() => {
    axios
      .get(`${ApiLink}/movie/top_rated`, {
        params: {
          api_key: ApiKey,
        },
      })
      .then((res) => {
        const data = res.data.results;
        setMovies(data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err.response, "here");
      });
  }, [ApiLink, ApiKey]);

  console.log(movies);

  const releaseDate = (date) => {
    const dateVal = new Date(date);
    const utcReleaseDateStr = dateVal.toISOString().split("T")[0];

    return utcReleaseDateStr
  };
  return (
    <div className={style.featuredWrapper}>
      <div className="row justify-content-between">
        <h3 className={style.title}>Featured movie</h3>
        <button className={style.moreBtn}>
          See more
          <Image
            alt=""
            src={"/images/chevron-right.svg"}
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={style.cardsWrapper}>
        {movies.map((detail, index) => (
          <div className={style.card}>
            <ImageComp
              className={style.cardImg}
              src={`${imgUrl}${detail.poster_path}`}
              width={"100%"}
              height={"100%"}
            />
            <div className={style.cardContent}>
              <p className={style.release}>
                <span data-testid="movie-release-date">
                  {releaseDate(detail.release_date)}
                </span>{" "}
              </p>
              <h3 className={style.movieTitle} data-testid="movie-title">
                {detail.title}
              </h3>
              <div className="row justify-content-between align-items-center">
                <div className={style.extra}>
                  <Image src={"/images/imdb.png"} width={35} height={17} />
                  <span>{detail.vote_average * 10} / 100</span>
                </div>
                <div className={style.extra}>
                  <Image
                    alt=""
                    src={"/images/tomato.png"}
                    width={16}
                    height={17}
                  />
                  <span>{detail.vote_average * 10}%</span>
                </div>
              </div>
              <div className={style.genre}>
                <Genre genreIds={detail.genre_ids} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
