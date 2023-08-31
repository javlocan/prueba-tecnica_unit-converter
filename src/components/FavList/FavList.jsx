/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { removeFav } from "../../common/redux";
import styles from "./FavList.module.scss";

import { useSelector, useStore } from "react-redux";
export const FavList = () => {
  const favList = useSelector((state) => state.favList);

  useEffect(() => {
    const localList = window.localStorage.getItem("fav-list");
    if (favList !== localList) {
      window.localStorage.setItem("fav-list", JSON.stringify(favList));
    }
  }, [favList]);

  return (
    <div className={styles.favList}>
      <h3>saved</h3>
      {favList.map((fav) => (
        <Fav key={fav.id} fav={fav} />
      ))}
    </div>
  );
};

const Fav = (props) => {
  const { fav } = props;
  const dispatch = useStore().dispatch;
  console.log(fav.id);
  return (
    <div className={styles.fav}>
      <span>
        {`${fav.firstValue} ${fav.firstUnit} → ${fav.secondValue} ${fav.secondUnit}`}
      </span>
      <button onClick={() => dispatch(removeFav({ id: fav.id }))}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06588 1.9948C9.35877 1.70191 9.35877 1.22703 9.06588 0.93414C8.77298 0.641247 8.29811 0.641247 8.00522 0.93414L5.00002 3.93934L1.99482 0.93414C1.70192 0.641247 1.22705 0.641247 0.934157 0.93414C0.641264 1.22703 0.641264 1.70191 0.934157 1.9948L3.93936 5L0.934147 8.00521C0.641254 8.2981 0.641254 8.77297 0.934147 9.06587C1.22704 9.35876 1.70191 9.35876 1.99481 9.06587L5.00002 6.06066L8.00522 9.06587C8.29812 9.35876 8.77299 9.35876 9.06588 9.06587C9.35878 8.77298 9.35878 8.2981 9.06588 8.00521L6.06068 5L9.06588 1.9948Z"
            fill="#676767"
          />
        </svg>
      </button>
    </div>
  );
};
