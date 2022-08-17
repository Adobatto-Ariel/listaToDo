//Info date

const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Task Container

const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString("es", { day: "numeric" });
    dateText.textContent = date.toLocaleDateString("es", { weekday: "long" });
    dateMonth.textContent = date.toLocaleDateString("es", { month: "short" });
    dateYear.textContent = date.toLocaleDateString("es", { year: "numeric" });
};
setDate();

const changeTaskState = (e) => {
    e.target.classList.toggle("done");
};

const addNewTask = (e) => {
    e.preventDefault();
    const { value } = e.target.taskText;
    if (!value) return;
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.addEventListener("click", changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    e.target.reset();
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach((element) => {
        element.classList.contains("done")
            ? done.push(element)
            : toDo.push(element);
    });
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach((element) => tasksContainer.appendChild(element));
};
