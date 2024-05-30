import { useEffect } from "react";


export default function Count({number}) {
  useEffect(()=>{
    document.title=`You clicked ${number} times`
  }, [number])
  
  return (
    <>
      <CountLabel />
      <span className={number > 5 ? 'limit':'correct'} >{number}</span>
    </>
  );
}

function CountLabel() {
  return <p>The current count is:</p>;
}
