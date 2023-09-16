'use client'

import { useRouter, useSearchParams } from "next/navigation";
import style from "./style.module.scss";
import Image from "next/image";

export default function Details() {
const router = useRouter()

  return (
    <main className={style.main}>
      <div className={style.posterImg}>
        <img src="/images/drop.png" alt="" width={"100%"} height={"100%"} />
        <div className={style.trailerBtn}>
          <button className={style.playBtn}>
            <Image src={"/images/play-deet.png"} width={54} height={54} />
          </button>
          <p>Watch trailer</p>
        </div>
      </div>
      <div className={style.movieDetails}>
        <div className={style.mainDetails}>
          <p data-testid="movie-title" >Movie title here</p>
          <p className={style.dot}>&#183;</p>
          <p data-testid="movie-release-date" >2022</p>
          <p className={style.dot}>&#183;</p>
          <p>PG-13</p>
          <p className={style.dot}>&#183;</p>
          <p data-testid="movie-runtime" >2h 10M</p>
          <span className={style.genre}>Drama</span>
        </div>
        <div className={style.ratings}>
          <Image src={"/images/star.png"} alt="" width={30} height={25} />
          <spam>3.5</spam>
        </div>
      </div>
      <div className={style.rowSection}>
        <div className={style.description}>
          <p className={style.overview} data-testid="movie-overview" >
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN's elite graduates on a mission that demands the ultimate
            sacrifice from those chosen to fly it.
          </p>
          <div className={style.list}>
            <p>
              Director: <span>name</span>
            </p>
            <p>
              Writers: <span>jim</span>
            </p>
            <p>
              Stars: <span>Tom</span>
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
