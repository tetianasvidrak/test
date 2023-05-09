import css from "./Card.module.css";
import logo from "../../assets/images/LogoGoIt.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollows } from "../../store/follow/slice";

const Card = ({ user }) => {
  const { ids } = useSelector((state) => state.follow);
  const isFollowing = ids.includes(user.id);
  const dispatch = useDispatch();
  return (
    <div className={css.card}>
      <div className={css.top}>
        <img src={logo} alt="" />
        <div className={css["avatar-wrapper"]}>
          <Avatar avatar={user.avatar} />
        </div>
      </div>
      <div className={css.bottom}>
        <span className={css.text}>
          <span>{user.tweets}</span>
          <span>TWEETS</span>
        </span>
        <span className={css.text}>
          <span>
            {isFollowing
              ? (Number(user.followers) + 1).toLocaleString("en-GB")
              : Number(user.followers).toLocaleString("en-GB")}
          </span>
          <span>FOLLOWERS</span>
        </span>
        <Button
          label={isFollowing ? "following" : "follow"}
          isActive={isFollowing}
          onClick={() => dispatch(toggleFollows(user.id))}
        />
      </div>
    </div>
  );
};

export default Card;
