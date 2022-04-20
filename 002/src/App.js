import Navbar from './component/Navbar';
import GridBox from './component/GridBox';
import {useState, useEffect} from 'react';

function App() {

  const [data,setData] = useState({})

  async function fetchData() {
      const res = await fetch('http://161.246.5.40:8880/question')
      res.json().then(res => setData(res))
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div className="container bg-neutral-600 h-screen min-w-full">
      <Navbar />
      <GridBox data={data}/>
    </div>
  );
}

export default App;