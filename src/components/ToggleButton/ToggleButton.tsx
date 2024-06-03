import style from "./toggle.module.scss";

export default function toggle() {
  return (
    <label className={style.switch}>
      <input className={style.toggle} type="checkbox"  />
      <span className={style.slider}></span>
      <span className="card-side"></span>
    </label>
  );
}
