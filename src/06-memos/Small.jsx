import { memo } from "react";

/* eslint-disable react/prop-types */

export const Small = memo(function Small({ value }) {
  console.log("Me volví a dibujar :C");
  return <small>{value}</small>;
});
