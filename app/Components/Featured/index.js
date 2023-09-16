import Image from "next/image";
import style from "./style.module.scss";

export default function Featured() {
  return (
    <div className={style.featuredWrapper}>
      <div className="row justify-content-between">
        <h3 className={style.title}>Featured movie</h3>
        <button className={style.moreBtn}>
          See more
          <Image src={"/images/chevron-right.svg"} width={20} height={20} />
        </button>
      </div>
      <div className={style.cardsWrapper}>
        <div className={style.card}>
          <img
            className={style.cardImg}
            src={"/images/poster-film.png"}
            width={"100%"}
            height={"100%"}
          />
          <div className={style.cardContent}>
            <p className={style.release}>
              USA, <span data-testid="movie-release-date">2018</span>{" "}
            </p>
            <h3 className={style.movieTitle} data-testid="movie-title">
              Spider-Man: Into the spiderverse
            </h3>
            <div className="row justify-content-between align-items-center">
              <div className={style.extra}>
                <Image src={"/images/imdb.png"} width={35} height={17} />
                <span>84.0/100</span>
              </div>
              <div className={style.extra}>
                <Image src={"/images/tomato.png"} width={16} height={17} />
                <span>87%</span>
              </div>
            </div>
            <div className={style.genre}>
              <spam>Animation</spam>, <span>Action</span>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.cardImg}
            src={"/images/poster-film.png"}
            width={"100%"}
            height={"100%"}
          />
          <div className={style.cardContent}>
            <p className={style.release}>
              USA, <span data-testid="movie-release-date">2018</span>{" "}
            </p>
            <h3 className={style.movieTitle} data-testid="movie-title">
              Spider-Man: Into the spiderverse
            </h3>
            <div className="row justify-content-between align-items-center">
              <div className={style.extra}>
                <Image src={"/images/imdb.png"} width={35} height={17} />
                <span>84.0/100</span>
              </div>
              <div className={style.extra}>
                <Image src={"/images/tomato.png"} width={16} height={17} />
                <span>87%</span>
              </div>
            </div>
            <div className={style.genre}>
              <spam>Animation</spam>, <span>Action</span>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.cardImg}
            src={"/images/poster-film.png"}
            width={"100%"}
            height={"100%"}
          />
          <div className={style.cardContent}>
            <p className={style.release}>
              USA, <span data-testid="movie-release-date">2018</span>{" "}
            </p>
            <h3 className={style.movieTitle} data-testid="movie-title">
              Spider-Man: Into the spiderverse
            </h3>
            <div className="row justify-content-between align-items-center">
              <div className={style.extra}>
                <Image src={"/images/imdb.png"} width={35} height={17} />
                <span>84.0/100</span>
              </div>
              <div className={style.extra}>
                <Image src={"/images/tomato.png"} width={16} height={17} />
                <span>87%</span>
              </div>
            </div>
            <div className={style.genre}>
              <spam>Animation</spam>, <span>Action</span>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.cardImg}
            src={"/images/poster-film.png"}
            width={"100%"}
            height={"100%"}
          />
          <div className={style.cardContent}>
            <p className={style.release}>
              USA, <span data-testid="movie-release-date">2018</span>{" "}
            </p>
            <h3 className={style.movieTitle} data-testid="movie-title">
              Spider-Man: Into the spiderverse
            </h3>
            <div className="row justify-content-between align-items-center">
              <div className={style.extra}>
                <Image src={"/images/imdb.png"} width={35} height={17} />
                <span>84.0/100</span>
              </div>
              <div className={style.extra}>
                <Image src={"/images/tomato.png"} width={16} height={17} />
                <span>87%</span>
              </div>
            </div>
            <div className={style.genre}>
              <spam>Animation</spam>, <span>Action</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
