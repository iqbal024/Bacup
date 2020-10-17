import React from "react";

export default function Loader(props) {
  const { floating } = props;

  return (
    <div className={`loader${floating ? " loader--floating" : ""}`}>
      <img src="/assets/loader.gif" alt="loading" />
    </div>
  );
}
