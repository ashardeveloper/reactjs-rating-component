import classes from "./App.module.css";
import icon from "./images/icon-star.svg";
import icon1 from "./images/illustration-thank-you.svg";
import { useState } from "react";
const App = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [number, setNumber] = useState();
  const [next, setNext] = useState(false);
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        {!next && (
          <div className={classes.card}>
            <div className={classes.image}>
              <img src={icon} className="icon" alt="star" />
            </div>
            <h2 className={classes.title}>How did we do?</h2>
            <p className={classes.description}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us
              <br /> improve our offering!
            </p>
            <div className={classes.ratings}>
              <div
                className={`${classes.rating} ${toggle1 && classes.apply}
              `}
                onClick={(e) => {
                  setToggle1(!toggle1);
                  setToggle2(false);
                  setToggle3(false);
                  setToggle4(false);
                  setToggle5(false);
                  setNumber(e.target.innerText);
                }}
              >
                1
              </div>

              <div
                className={`${classes.rating} ${toggle2 && classes.apply}`}
                onClick={(e) => {
                  setToggle1(false);
                  setToggle2(!toggle2);
                  setToggle3(false);
                  setToggle4(false);
                  setToggle5(false);
                  setNumber(e.target.innerText);
                }}
              >
                2
              </div>
              <div
                className={`${classes.rating} ${toggle3 && classes.apply}`}
                onClick={(e) => {
                  setToggle1(false);
                  setToggle2(false);
                  setToggle3(!toggle3);
                  setToggle4(false);
                  setToggle5(false);
                  setNumber(e.target.innerText);
                }}
              >
                3
              </div>
              <div
                className={`${classes.rating} ${toggle4 && classes.apply}`}
                onClick={(e) => {
                  setToggle1(false);
                  setToggle2(false);
                  setToggle3(false);
                  setToggle4(!toggle4);
                  setToggle5(false);
                  setNumber(e.target.innerText);
                }}
              >
                4
              </div>
              <div
                className={`${classes.rating} ${toggle5 && classes.apply}`}
                onClick={(e) => {
                  setToggle1(false);
                  setToggle2(false);
                  setToggle3(false);
                  setToggle4(false);
                  setToggle5(!toggle5);
                  setNumber(e.target.innerText);
                }}
              >
                5
              </div>
            </div>
            <button
              className={classes.btn}
              onClick={() => {
                if (number) setNext(true);
              }}
            >
              S U B M I T
            </button>
          </div>
        )}
        {next && (
          <div className={classes.card}>
            <div className={classes.thankuImg}>
              <img src={icon1} className="icon1" alt="star" />
            </div>
            <div className={classes.ratingDiv}>
              <p
                className={classes.selectedRating}
              >{`You selected ${number} out of 5`}</p>
            </div>
            <div className={classes.message}>
              <h2 className={classes.thanku}>Thank you!</h2>
            </div>
            <div className={classes.descDiv}>
              <p className={classes.descMsg}>
                We appreciate you taking the time to give a rating.
                <br />
                If you ever need more support, don't hesitate to
                <br /> get in touch!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
