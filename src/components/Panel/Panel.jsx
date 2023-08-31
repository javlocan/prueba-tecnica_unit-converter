import { useSelector } from "react-redux";

import { toFixed2 } from "../../utils";
import { resetPanel } from "../../common/redux";
import styles from "./Panel.module.scss";

import {
  store,
  setValues,
  setUnits,
  addFav,
  swapThings,
} from "../../common/redux";

export const Panel = () => {
  const panel = useSelector((state) => state.panel);
  const dispatch = store.dispatch;

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstValue = window.document.forms[0].elements["unit-value"].value;
    const firstUnit = window.document.forms[0].elements["unit-select"].value;

    dispatch(addFav({ firstValue, firstUnit }));
    dispatch(resetPanel());
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.convert}>convert</h2>

      <form
        id="form"
        onSubmit={(e) => handleSubmit(e)}
        className={styles.select}
      >
        <select
          id="unit-select"
          name="unit-select"
          required
          onChange={(e) => dispatch(setUnits({ firstUnit: e.target.value }))}
        >
          <option value="">--Please choose an option--</option>
          <option value="km">km → mi</option>
          <option value="miles">mi → km</option>
          <option value="m">m → ft</option>
          <option value="ft">ft → m</option>
          <option value="cm">cm → in</option>
          <option value="in">in → cm</option>
        </select>
      </form>
      <button
        className={styles.swap}
        onClick={(e) => {
          e.preventDefault();
          dispatch(swapThings());
        }}
      >
        <SwapIcon />
      </button>

      <input
        className={styles.value}
        id="unit-value"
        name="unit-value"
        form="form"
        step="any"
        required
        type="number"
        onChange={(e) => dispatch(setValues({ value: e.target.value }))}
        placeholder="100"
      ></input>
      <span className={styles.firstUnit}>{panel.firstUnit}</span>
      <div className={styles.favResult}>
        <button type="submit" form="form" id={styles.fav}>
          <FavIcon />
        </button>
        <span className={styles.result}>{toFixed2(panel.result)}</span>
      </div>
      <span className={styles.secondUnit}>{SECOND_UNIT[panel.firstUnit]}</span>
    </div>
  );
};

const SwapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.53033 6.53033C7.82322 6.23744 7.82322 5.76256 7.53033 5.46967C7.23744 5.17678 6.76256 5.17678 6.46967 5.46967L4.46967 7.46967C4.17678 7.76256 4.17678 8.23744 4.46967 8.53033L6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967L6.81066 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H6.81066L7.53033 6.53033Z"
      fill="white"
    />
    <path
      d="M16.4697 13.4697C16.1768 13.7626 16.1768 14.2374 16.4697 14.5303L17.1893 15.25H7C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75H17.1893L16.4697 17.4697C16.1768 17.7626 16.1768 18.2374 16.4697 18.5303C16.7626 18.8232 17.2374 18.8232 17.5303 18.5303L19.5303 16.5303C19.8232 16.2374 19.8232 15.7626 19.5303 15.4697L17.5303 13.4697C17.2374 13.1768 16.7626 13.1768 16.4697 13.4697Z"
      fill="white"
    />
  </svg>
);

const FavIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 10.0298C3.25 7.3293 5.61914 5.25 8.4 5.25C9.83347 5.25 11.0948 5.92214 12 6.79183C12.9052 5.92214 14.1665 5.25 15.6 5.25C18.3809 5.25 20.75 7.3293 20.75 10.0298C20.75 11.8797 19.9611 13.5064 18.8682 14.8815C17.7771 16.2543 16.35 17.4193 14.9835 18.366C14.4615 18.7276 13.9335 19.0611 13.4503 19.3072C12.9965 19.5383 12.4747 19.75 12 19.75C11.5253 19.75 11.0035 19.5383 10.5497 19.3072C10.0665 19.0611 9.53846 18.7276 9.01653 18.366C7.65005 17.4193 6.22287 16.2543 5.13182 14.8815C4.03888 13.5064 3.25 11.8797 3.25 10.0298ZM8.4 6.75C6.32075 6.75 4.75 8.2791 4.75 10.0298C4.75 11.4333 5.34579 12.74 6.30609 13.9482C7.26828 15.1588 8.56292 16.2269 9.87074 17.133C10.3656 17.4758 10.8317 17.7675 11.2305 17.9706C11.6586 18.1886 11.9067 18.25 12 18.25C12.0933 18.25 12.3414 18.1886 12.7695 17.9706C13.1683 17.7675 13.6344 17.4758 14.1293 17.133C15.4371 16.2269 16.7317 15.1588 17.6939 13.9482C18.6542 12.74 19.25 11.4333 19.25 10.0298C19.25 8.2791 17.6792 6.75 15.6 6.75C14.4058 6.75 13.2908 7.46342 12.5946 8.36892C12.4526 8.55356 12.2329 8.66176 12 8.66176C11.7671 8.66176 11.5474 8.55356 11.4054 8.36892C10.7092 7.46342 9.59415 6.75 8.4 6.75Z"
      fill="white"
    />
  </svg>
);

const SECOND_UNIT = {
  "": "",
  km: "miles",
  miles: "km",
  m: "ft",
  ft: "m",
  cm: "in",
  in: "cm",
};
