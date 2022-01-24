/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

interface propType {
  menu: number;
  setMenu: Function;
}

export default function Navigation(props: propType) {
  const [inputStatus, setInputStatus] = useState(true);
  const [auxStatus, setAuxStatus] = useState(false);
  const [matrixStatus, setMatrixStatus] = useState(false);

  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a
          className={inputStatus ? "nav-link active" : "nav-link"}
          aria-current="page"
          href="#"
          onClick={() => {
            setInputStatus(true);
            setAuxStatus(false);
            setMatrixStatus(false);
            props.setMenu(0);
          }}
        >
          INPUT
        </a>
      </li>
      <li className="nav-item">
        <a
          className={auxStatus ? "nav-link active" : "nav-link"}
          href="#"
          onClick={() => {
            setInputStatus(false);
            setAuxStatus(true);
            setMatrixStatus(false);
            props.setMenu(1);
          }}
        >
          AUX
        </a>
      </li>
      <li className="nav-item">
        <a
          className={matrixStatus ? "nav-link active" : "nav-link"}
          href="#"
          onClick={() => {
            setInputStatus(false);
            setAuxStatus(false);
            setMatrixStatus(true);
            props.setMenu(2);
          }}
        >
          MATRIX
        </a>
      </li>
    </ul>
  );
}
