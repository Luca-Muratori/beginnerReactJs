export default function Butoon() {
  const handleClick=()=>{
    console.log("clicked")
  }

  return (
    <button onClick={handleClick}>+</button> 
  )
}
