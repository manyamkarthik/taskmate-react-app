


export const AddTask = ({task,setTask,inputValue,setInputValue,buttonValue,setButtonValue}) => {
    
    
    
    function handleSubmit(e){
        e.preventDefault();
        const existing=task.findIndex((task) => task.updated)
        console.log(existing)
        if(existing!==-1){
            const updatedTask=task.map( (t) => t.updated?{...t, name:inputValue,updated:false,date:new Date(Date.now()).toLocaleString()}:t);
            setTask(updatedTask)
            setButtonValue('ADD')
        }else{
        
            const newTask={id:Date.now(),name:inputValue,updated:false,date: new Date(Date.now()).toLocaleString()};
            setTask( (prev) => [...prev,newTask] )
        }

        
        setInputValue('')
        // console.log(task)
    }
    function handleChange(e){
        setInputValue(e.target.value);
    }
    
  return (
    <section className='addTask'>
        <form className='form' onSubmit={handleSubmit}>
            <input className='input' type='text' autoComplete='off' placeholder='add task' value={inputValue} onChange={handleChange}/>
            <button   className='button' type='submit' disabled={!inputValue.trim()} >{buttonValue}</button>
        </form>
       
    </section>
  )
}
