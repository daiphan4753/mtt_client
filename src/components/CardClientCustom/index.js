import React, { useState } from "react";
import "./index.css";

export default function CardClientCustom(props) {
  return (
    <div className="card__container">
      <div className="card__box-header">
        <span className="card__header-mdh">Mã đơn hàng: {props.mdh}</span>
      </div>
      <div className="card__box-content">
        <div className="card__content">
            <span className="card__content-name">{props.name}</span>
            <span className="card__content-phone">{props.phone}</span>
        </div>
        <div className="card__location-box">
          <span className="card__location">Địa chỉ: {props.location}</span>
        </div>
      </div>
    </div>
  );
}
