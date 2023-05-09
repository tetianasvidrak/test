import css from "./Avatar.module.css";

const Avatar = ({ avatar }) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="" />
    </div>
  );
};

export default Avatar;
