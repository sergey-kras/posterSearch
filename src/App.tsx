import React from 'react';
import './App.css';
import { MainPage } from './src/app/mainPage';
import { LangWrapper } from './src/components/langWrapper';

function App() {
  return (
    <div className="App">
        <LangWrapper>
            <MainPage/>
        </LangWrapper>
    </div>
  );
}

export default App;
