import React from 'react';
import WellComeArea from "./components/WellComeArea";
import WellComeImg from "./components/Well_Come_Area";
import PhotoCredit from "./components/photo_credit";
import InformationFeeld from './components/InformationFeeld';
import "../src/assets/styles/main.css";
function App() {
  return (
    <div>
      <WellComeArea/>
      <WellComeImg/>
      <PhotoCredit/>
      <div className='libArea'>
        <div className='topArea'>
          <h2>Books</h2>
          <div className='line-2'></div>
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>
        </div>

        <div className='topArea'>
          <h2>Authors</h2>  
          <div className='line-2'></div>  
          <InformationFeeld/>  
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/>         
        </div>
      </div>
      
    </div>
  );
}

export default App;
