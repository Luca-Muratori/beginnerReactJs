import "./App.css";
import Butoon from "./Butoon.jsx";
import Count from "./Count.jsx";

function App() {
  return <>
    <div style={{
      display:'flex',
      flexDirection:'column'
    }}>
      <Count />
      <Butoon/>
    </div>
  
  </>;
}

export default App;
