import Navbar from './component/Navbar';
import GridBox from './component/GridBox';
import {useState, useEffect} from 'react';
// import axios from 'axios';

function App() {

  const [data,setData] = useState({})

  const fetchData = async () => {
    const res = await fetch('http://161.246.5.40:8880/question')
      res.json().then(res => setData(res))
  }

  // false
  // const fetchData = async () => {
  //   const res = await axios.get('http://161.246.5.40:8880/question')
  //   res.then(res => setData(res))
  // }

  useEffect(() => {
    fetchData();
  },[1000])

  return (
    <div className="container bg-neutral-600 h-screen min-w-full">
      <Navbar />
      <GridBox data={data}/>
    </div>
  );
}

export default App;