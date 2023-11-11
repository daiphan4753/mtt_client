import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeaderCustom from "../../components/HeaderCustom";
import CardClientCustom from "../../components/CardClientCustom";

export default function Home() {
  const [inpFind, setInpFind] = useState();
  const evtClick = () => {
    console.log(inpFind);
  };
  return (
    <div>
      <HeaderCustom />
      <div className="home__container">
        <div className="home__find-box">
          <input
            type="text"
            className="home__find-input"
            placeholder="Bạn muốn tìm ai"
            value={inpFind}
            onChange={(e) => setInpFind(e.target.value)}
          />
          <button id="home__find-button" onClick={evtClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="client__container">
          <CardClientCustom
            mdh={"abc"}
            name={"nguyen van a"}
            phone={"0123456789"}
            location={"123, abc, bcd"}
          />
        </div>
      </div>
    </div>
  );
}
