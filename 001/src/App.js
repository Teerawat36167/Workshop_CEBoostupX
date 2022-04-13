import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="container bg-stone-600 h-screen min-w-full">
        {/* <div className='flex justify-between bg-stone-800 h-20'>
          <div className='text-white text-5xl'>
            <a href=''>Logo</a>
          </div>
          <div className='text-white text-3xl mt-4'>
            <a href='' className='px-10'>Home</a>
            <a href='' className='px-10'>Tasks</a>
            <a href='' className='px-10'>Logout</a>
          </div>
        </div> */}
        <Navbar />
      </div>
    </>
  );
}

export default App;
