type ToDoProps = {
  darkMode: boolean;
  TodoHook: () => {
    task: string;
    tasks: { id: number; text: string; completed: boolean }[];
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: () => void;
    handleRemoveTask: (id: number) => void;
    toggleTask: (id: number) => void;
    clearCompleted: () => void;
    setFilter: React.Dispatch<
      React.SetStateAction<"all" | "active" | "completed">
    >;
    filter: "all" | "active" | "completed";
    getTotalTasks: () => number;
  };
};

function ToDo({ darkMode, TodoHook }: ToDoProps) {
  const {
    task,
    tasks,
    setTask,
    handleAddTask,
    handleRemoveTask,
    toggleTask,
    clearCompleted,
    setFilter,
    filter,
    getTotalTasks,
  } = TodoHook();

  return (
    <div className="flex flex-col justify-center items-center absolute top-22 left-[0.5rem] sm:left-40 md:left-50 lg:left-[20rem] xl:left-[30rem] 2xl:left-[40rem]">
      <div className="w-80 flex items-center">
        <button
          className="absolute left-16 md:left-20 bg-VeryLightGray border border-DarkGrayishBlue h-5 w-5 rounded-full cursor-pointer"
          onClick={handleAddTask}
          aria-label="Add task"
        ></button>
        <input
          type="text"
          className={`w-full p-3 pl-25 rounded-lg outline-0 ${
            darkMode
              ? "bg-VeryDarkGrayishBlue text-white"
              : "bg-VeryLightGray text-DarkGrayishBlue"
          }`}
          placeholder="Create a new todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="mt-5 w-96">
        {tasks.length > 0 ? (
          <ul className="space-y-1 flex flex-col items-center">
            {tasks.map((t) => (
              <li
                key={t.id}
                className={`flex justify-between items-center py-3 px-8 w-80 rounded-lg cursor-pointer shadow transform hover:translate-0.5 duration-200 ${
                  darkMode
                    ? "bg-VeryDarkGrayishBlue text-white"
                    : "bg-VeryLightGray text-DarkGrayishBlue"
                }`}
              >
                <button
                  onClick={() => toggleTask(t.id)}
                  className={`border-2 border-VeryLightGrayishBlue h-6 w-6 rounded-full flex-shrink-0 cursor-pointer flex justify-center items-center   ${
                    t.completed
                      ? "bg-gradient-to-t from-checkFirts to-checkSecond"
                      : ""
                  }`}
                >
                  {t.completed && <img src="/images/icon-check.svg" />}
                </button>

                <p className={t.completed ? "line-through text-gray-500" : ""}>
                  {t.text}
                </p>

                <button
                  onClick={() => handleRemoveTask(t.id)}
                  aria-label="Remove task"
                  className="cursor-pointer"
                >
                  <img
                    src="/images/icon-cross.svg"
                    alt="Remove task"
                    className={`${darkMode ? "invert" : ""}`}
                  />
                </button>
              </li>
            ))}
            <div
              className={`flex justify-between items-center py-3 px-8 w-80 rounded-lg shadow ${
                darkMode
                  ? "bg-VeryDarkGrayishBlue text-white"
                  : "bg-VeryLightGray text-DarkGrayishBlue"
              }`}
            >
              <p className={`text-sm `}>{getTotalTasks()} items left</p>
              <button className="cursor-pointer" onClick={clearCompleted}>
                Clear Completed
              </button>
            </div>
          </ul>
        ) : (
          <p className="text-center font-bold text-VeryDarkBlue">
            No tienes tareas, agrega una nueva tarea
          </p>
        )}
      </div>

      <div
        className={`flex justify-between items-center py-3 px-8 w-80 rounded-lg mt-5 shadow ${
          darkMode
            ? "bg-VeryDarkGrayishBlue text-white"
            : "bg-VeryLightGray text-DarkGrayishBlue"
        }`}
      >
        <button
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            filter === "all" ? "text-BrightBlue" : "text-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            filter === "active" ? "text-white" : "text-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            filter === "completed" ? "text-white" : "text-DarkGrayishBlue"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <p className="text-DarkGrayishBlue mt-15">
        Drag and drop to reorder list.
      </p>
    </div>
  );
}

export default ToDo;
