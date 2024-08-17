import React from 'react'
import './App.css';
import Navbar from './component/Navbar'
import FirstPart from './component/FirstPart';
import Services from './component/Services'
import SecondPart from './component/SecondPart';
import ThirdPart from './component/ThirdPart';
import FourthPart from './component/FourthPart';
import ContactUs from './component/ContactUs';
import FinalPart from './component/FinalPart';


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <FirstPart/>
      <Services/>
      <SecondPart/>
      <ThirdPart/>
      <FourthPart/>
      <ContactUs/>
      <FinalPart/>
    </div>
    </>
  );
}
export default App;
