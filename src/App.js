
import './App.css';
import {  useState,useEffect } from 'react';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { Footer } from './components/Footer';


function App() {
    const [task,setTask]=useState(JSON.parse(localStorage.getItem('task')) || []);
    const [inputValue, setInputValue] = useState('');
    const [buttonValue,setButtonValue]=useState('ADD');
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");
    useEffect(() => {
      localStorage.setItem('task', JSON.stringify(task));
    }, [task]);
    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);
    
  return (
    <div className={"App " + theme}>

    <div className='container'>
    
    <Header setTheme={setTheme} theme={theme}/>
    <AddTask task={task} setTask={setTask} inputValue={inputValue} setInputValue={setInputValue} buttonValue={buttonValue} setButtonValue={setButtonValue} />
    <ShowTask tasks={task} setTask={setTask} inputValue={inputValue} setInputValue={setInputValue} buttonValue={buttonValue} setButtonValue={setButtonValue}   />
   
    </div>
    <Footer/>
    </div>
  );
}

export default App;
