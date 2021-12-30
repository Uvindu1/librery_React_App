import React from 'react';
import WellComeArea from "./components/WellComeArea";
import WellComeImg from "./components/Well_Come_Area";
import PhotoCredit from "./components/photo_credit";
import InformationFeeld from './components/InformationFeeld';
import InformationAddBotton from './components/InformationAddBotton';
import CreateArea from './components/CreateArea';
import InputFelds from './components/inputFelds'
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
          <InformationAddBotton BTNName = "Add Book"/>
        </div>
        
        <div className='topArea'>
          <h2>Authors</h2>  
          <div className='line-2'></div>  
          <InformationFeeld/>  
          <InformationFeeld/>
          <InformationFeeld/>
          <InformationFeeld/> 
          <InformationAddBotton BTNName = "Add Authors"/>        
        </div>

        <div className='topArea'>
        <CreateArea HName= "Create Book"/>
        <br/>
        <br/>
        <InputFelds InputName = "Tittel of Book"/>
        
        <InputFelds InputName = "BBN"/>
        
        
        </div>
        <div className='topArea'>
        <CreateArea HName= "Create Authors"/>
        <br/>
        <br/>
        <InputFelds InputName = "Name of Authors"/>
        <br/>
        </div>
          
        
      </div>
      
    </div>
  );
}

export default App;
