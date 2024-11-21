export const ShowTask = ({ tasks, setTask, inputValue, setInputValue,buttonValue,setButtonValue }) => {
  const length=tasks.length;
  function handleEdit(id) {
    const existing = tasks.findIndex((task) => task.id === id);
    setInputValue(tasks[existing].name);
    setButtonValue('UPDATE')

    if (existing !== -1) {
      const updatedTask = tasks.map((task, index) =>
        index === existing
          ? { ...task, updated: true }
          : { ...task, updated: false }
      );
      setTask(updatedTask);
      
    }
    console.log(tasks)
  }
  function handleDelete(id){
    const updated=tasks.filter( (task) => task.id!==id);
    setInputValue('')
    setTask(updated)
  }
  function handleClear(){
    setTask([])
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">ToDo</span>
          <span className="count">{length}</span>
        </div>

        <button onClick={handleClear} className="clearAll">Clear All</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <p>
              <span className="name">{t.name}</span>
              <span className="time">{t.date}</span>
            </p>
            <i
              onClick={() => handleEdit(t.id)}
              className="bi bi-pencil-fill"
            ></i>
            <i
              onClick={() => handleDelete(t.id)}
              className="bi bi-trash-fill"
            ></i>
          </li>
        ))}

        {/* <li>
            <p>
                <span className="name">Task A</span>
                <span className="time">{Date.now()}</span>
            </p>
            <i className="bi bi-pencil-fill"></i>
            <i className="bi bi-trash-fill"></i>
        </li> */}
      </ul>
    </section>
  );
};
