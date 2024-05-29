import { useState } from "react";

export default function Count() {
  const [number,setNumber]=useState(4)
  return (
    <>
      <CountLabel />
      <span>{number}</span>
    </>
  );
}

function CountLabel() {
  return <p>The current count is:</p>;
}
