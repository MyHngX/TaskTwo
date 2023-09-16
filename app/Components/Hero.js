import NavBar from "./NavBar";
import style from "../page.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={style.hero}>
      <img
        src={"/images/poster.png"}
        alt="poster"
        width={"100%"}
        height={"100%"}
        className={style.posterImg}
      />
      <div className={style.heroContent}>
        <NavBar />
        <div className={style.contentWrapper}>
          <div className={style.description}>
            <h1 className={style.title}>John Wick 3 : Parabellum</h1>
            <div className="row align-items-center">
              <div className={style.extra}>
                <Image src={"/images/imdb.png"} width={35} height={17} alt="" />
                <span>86.0/100</span>
              </div>
              <div className={style.extra}>
                <Image
                  src={"/images/tomato.png"}
                  width={16}
                  height={17}
                  alt=""
                />
                <span>97%</span>
              </div>
            </div>
            <p className={style.text}>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button className={style.trailerBtn}>
              <Image alt="" src={"/images/play.svg"} width={20} height={20} />
              <span>Watch trailer</span>
            </button>
          </div>
          <div className={style.buttons}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <button className={index == 2 ? style.active : null}>
                  {index == 2 && (
                    <Image
                      src={"/images/minus.svg"}
                      className={style.dash}
                      width={20}
                      height={3}
                    />
                  )}
                  <span>{index + 1}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
