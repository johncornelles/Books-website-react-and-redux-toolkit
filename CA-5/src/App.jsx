import  { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Allroute from './Allroute';
import "./App.css"

const App = () => {
  useEffect(() => console.clear())
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Allroute />
      </BrowserRouter>
    </>
  );
};

export default App;