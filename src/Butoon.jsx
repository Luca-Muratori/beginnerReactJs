export default function Butoon({setNumber}) {
  return (
    <button className='color' onClick={()=>{setNumber((prev)=>prev+1)}}>+</button> 
  )
}
