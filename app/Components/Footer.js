import style from "../page.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.row}>
        <img src="/images/facebook.svg" alt="" />
        <img src="/images/instagram.svg" alt="" />
        <img src="/images/twitter.svg" alt="" />
        <img src="/images/youtube.svg" />
      </div>
      <div className={style.row}>
        <p>Conditions of use</p>
        <p>Privacy & Policy</p>
        <p>Press room</p>
      </div>
      <div className={style.row}>
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
}
