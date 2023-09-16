import style from "./style.module.scss";
import Image from "next/image";

export default function Details({ details }) {
  const imgUrl = process.env.IMG_URL;

  const releaseDate = (date) => {
    const dateVal = new Date(date);
    const utcReleaseDateStr = dateVal?.toISOString().split("T")[0];

    return utcReleaseDateStr;
  };
  return (
    <main className={style.main}>
      <div className={style.posterImg}>
        <img
          src={`${imgUrl}${details.backdrop_path}`}
          alt=""
          width={"100%"}
          height={"100%"}
        />
        <div className={style.trailerBtn}>
          <button className={style.playBtn}>
            <Image src={"/images/play-deet.png"} width={54} height={54} />
          </button>
          <p>Watch trailer</p>
        </div>
      </div>
      <div className={style.movieDetails}>
        <div className={style.mainDetails}>
          <p data-testid="movie-title">{details.title}</p>
          <p className={style.dot}>&#183;</p>
          <p data-testid="movie-release-date">
            {releaseDate(details.release_date)}
          </p>
          <p className={style.dot}>&#183;</p>
          <p>
            <span data-testid="movie-runtime">{details.runtime}</span> minutes
          </p>
          {details.genres.map((el, index) => (
            <span className={style.genre} key={index}>
              {el.name}
            </span>
          ))}
        </div>
        <div className={style.ratings}>
          <Image src={"/images/star.png"} alt="" width={30} height={25} />
          <spam>{details.vote_average}</spam>
        </div>
      </div>
      <div className={style.rowSection}>
        <div className={style.description}>
          <p className={style.overview} data-testid="movie-overview">
            {details.overview}
          </p>
          <div className={style.list}>
            <p>
              Director: <span>Joseph Kosinski</span>
            </p>
            <p>
              Writers: <span>Jim Cash, Jack Epps Jr, Peter Craigm</span>
            </p>
            <p>
              Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
            </p>
            <div className={style.award}>
              <button className={style.topRatedBtn}>
                Top rated movies #65
              </button>
              <div className={style.nomination}>
                <p>Award 9 nominations</p>
                <Image
                  src={"/images/expand-arrow.png"}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <aside className={style.side}>
          <button className={style.showTime}>
            <Image src={"/images/two-tickets.png"} width={25} height={25} />
            <span>See showtimes</span>
          </button>
          <button className={style.watchOptions}>
            <Image src={"/images/list.png"} width={23} height={23} />
            <span>More watch options</span>
          </button>
          <div className={style.cardWrapper}>
            <div className={style.cards}>
              <div className={style.card}></div>
              <div className={style.card}></div>
              <div className={style.card}></div>
            </div>
            <div className={style.bottom}>
              <Image src={"/images/list-white.png"} width={23} height={23} />
              <p>The Best Movies and Shows in September</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
