import React from 'react';
import './App.css';
import Student from './components/Student'

function App() {
  return (
    <div className="App">
      <h1 className="LeadersBoardHeading">LeadersBoard</h1>
      <Student name="Alishan Ali" university="FAST" score={340}/>
      <Student name="Rehman" university="IQRA" score={350}/>
      <Student name="Anas Ahmed" university="MAJU" score={230}/>
      <Student name="Asfa Murad" university="LIQUAT" score={350}/>
      <Student name="Iqra Aziz" university="SZABIST" score={344}/>
    </div>
  );
}

export default App;
