import Image from "next/image";
import style from "../page.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Image alt="logo" src="/Icons/logo.svg" width={50} height={50} />
        <p className={style.logoText}>MovieBox</p>
      </div>
      <div className={style.searchWrapper}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="What do you want to watch?"
        />
        <div className={style.searchIcon}>
          <Image
            alt="search-icon"
            src={"/images/search.svg"}
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className={style.right}>
        <Link href={"#"} className={style.signIn}>
          Sign in
        </Link>
        <button className={style.menu}>
          <Image
            alt="menu-icon"
            src={"/images/menu.svg"}
            width={24}
            height={24}
          />
        </button>
      </div>
    </nav>
  );
}
