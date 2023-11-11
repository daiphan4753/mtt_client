import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Setting() {
  const menu = [
    { icon: "fa-solid fa-user", title: "abc" },
    { icon: "fa-solid fa-user", title: "bcd" },
  ];
  return (
    <div>
      <div className="setting__container">
        <ul className="setting__box-menu">
          {menu.map((item) => (
            <li key={item.title}>
              <div className="setting__menu-icon">
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </div>
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
