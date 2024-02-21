import React from "react";
import './Line.css'
export default function Line() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
      <div className="line"></div>
      <i className="fa-solid fa-star star text-white m-4 "></i>
      <div className="line"></div>
      </div>
    </>
  );
}
