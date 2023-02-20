


const App = () => {
  const a = 10;
  const b = 20;
  const course = "Frontend Pro";
  const part1 = "Вводные занятия по React";
  const tasks1 = 10;
  const part2 = "Использование React хуков";
  const tasks2 = 5;
  const part3 = "Использование библиотеки react-router-dom";
  const tasks3 = 15;

  return (
    <div className="App">
      <h1>{course}</h1>
      <p>
        {part1} {tasks1}
      </p>
      <p>
        {part2} {tasks2}
      </p>
      <p>
        {part3} {tasks3}
      </p>
      <p>Full count of tasks: </p>
    </div>
  );
};

export default App;
