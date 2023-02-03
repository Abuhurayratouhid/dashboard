import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';


function App() {
  return (
    <div className="">
      <h1 className='text-primary text-center text-3xl my-10'>Dashboard </h1>
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
