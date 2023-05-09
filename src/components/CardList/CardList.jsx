import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/operations";
import Card from "../Card";
import css from "./CardList.module.css";
import Filter from "../Filter";
import { setFilter } from "../../store/filter/slice";
import { filterUsers } from "../../utils/filterUsers";
import { pagination } from "../../utils/pagination";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Follow", value: "follow" },
  { label: "Following", value: "following" },
];

const PAGE_SIZE = 12;

const CardList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);
  const { ids } = useSelector((state) => state.follow);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const firstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRender.current) return;
    setFilteredUsers(filterUsers(users, filter, ids));
  }, [filter, ids, users]);

  useEffect(() => {
    if (firstRender.current) return;
    setLastPage(filteredUsers.length >= page * PAGE_SIZE);
  }, [filteredUsers, page]);

  useEffect(() => {
    dispatch(fetchUsers());
    firstRender.current = false;
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : users.length ? (
        <div className={css.inner}>
          <div className={css.filter}>
            <Filter
              options={filterOptions}
              initialValue={filter}
              onSelect={(option) => dispatch(setFilter(option))}
            />
          </div>
          <div className={css.wrapper}>
            {pagination(page, PAGE_SIZE, filteredUsers).map((user) => (
              <Card key={user.id} user={user} />
            ))}
          </div>
          {isLastPage && (
            <button
              className={css.more}
              onClick={() => setPage((prevState) => prevState + 1)}
            >
              More
            </button>
          )}
        </div>
      ) : (
        <div>There are no users</div>
      )}
    </>
  );
};

export default CardList;
