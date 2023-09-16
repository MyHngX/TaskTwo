'use client'

import Image from "next/image";
import style from "./sidebar.module.scss";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
 
  const routes = [
    {
      name: "Home",
      icon: "/images/home.png",
      path: "#",
    },
    {
      name: "Movies",
      icon: "/images/movie-projector.png",
      path: "/movies",
    },
    {
      name: "TV series",
      icon: "/images/tv-show.png",
    },
    {
      name: "Upcoming",
      icon: "/images/calendar.png",
    },
  ];
  return (
    <nav className={style.sideNav}>
      <div className={style.logo}>
        <Image alt="logo" src="/Icons/logo.svg" width={50} height={50} />
        <p className={style.logoText}>MovieBox</p>
      </div>
      <div className={style.navList}>
        {routes.map((el, index) => (
          <button key={index} className={`${style.navBtn} ${pathname.startsWith(el.path) && style.active }`}>
            <Image
              src={el.icon}
              alt={`${el.name}-icon`}
              width={25}
              height={25}
            />
            <span>{el.name}</span>
          </button>
        ))}
        <div className={style.extra}>
          <p className={style.first}>
            Play movie quizzes and earn free tickets
          </p>
          <p className={style.second}>50k people are playing right now</p>
          <button>Start playing</button>
        </div>
        <button className={style.navBtn}>
          <Image
            src={"/images/logout.png"}
            alt={`out-icon`}
            width={25}
            height={25}
          />
          <span>Log out</span>
        </button>
      </div>
    </nav>
  );
}
