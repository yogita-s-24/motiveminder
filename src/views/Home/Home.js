import React, { useEffect, useState } from "react";
import "./Home.css";
import Task from "./../../components/Task/Task";
import showToast from 'crunchy-toast';

const Home = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Submit Assignment",
      description: "Only in two days",
      priority: "very high",
    },
  ]);

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("motiveminder"));

    if (list && list.length >= 0) {
      setTaskList(list);
    }
  }, []);

  const saveListToLocalStorage = (tasks) => {
    localStorage.setItem("motiveminder", JSON.stringify(tasks));
  };

  const clearInputFields = () => {
    setTitle("");
    setDescription("");
    setPriority("");
  };

  const addTaskToList = () => {
    const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      id: randomId,
      title: title,
      description: description,
      priority: priority,
    };

    const newTaskList = [...taskList, obj];

    setTaskList(newTaskList);

    setTaskList([...taskList, obj]);

    clearInputFields();

    saveListToLocalStorage(newTaskList);

    showToast('Task added successfully!', 'success',3000);
  };

  const removeTaskFromList = (id) => {
    let index;

    taskList.forEach((task, i) => {
      if (task.id === id) {
        index = i;
      }
    });

    const tempArray = taskList;
    tempArray.splice(index, 1);

    setTaskList([...tempArray]);

    saveListToLocalStorage(tempArray);

    showToast('Task deleted successfully!', 'alert',3000);

  };

  const setTaskEditable = (id) => {
    setIsEdit(true);
    setId(id);
    let currentEditTask;
    //find the object with matching ID and update it's values to what is in state

    taskList.forEach((task) => {
      if (task.id === id) {
        currentEditTask = task;
      }
    });

    setTitle(currentEditTask.title);
    setDescription(currentEditTask.description);
    setPriority(currentEditTask.priority);
  };

  const updateTask = () => {
    let indexToUpdate;

    taskList.forEach((task, i) => {
      if (task.id === id) {
        indexToUpdate = i;
      }
    });

    const tempArray = taskList;
    tempArray[indexToUpdate] = {
      id: id,
      title: title,
      description: description,
      priority: priority,
    };

    setTaskList([...tempArray]);
    saveListToLocalStorage(tempArray);

    setId(0);
    clearInputFields();
    setIsEdit(false);

    showToast('Task updated successfully!', 'info',3000);

  };

  return (
    <>
      <div className="container">
        <h1 className="app-title">🎯 Motive Minder 🎯</h1>
      </div>
      <div className="todo-flex-container">
        <div>
          <h1 className="text-center">
            Show Task <i className="fa-brands fa-stack-exchange show-icon"></i>
          </h1>

          <div className="tasks-container">
            {taskList.map((taskItem, index) => {
              const { id, title, description, priority } = taskItem;
              return (
                <Task
                  id={id}
                  title={title}
                  description={description}
                  priority={priority}
                  key={index}
                  removeTaskFromList={removeTaskFromList}
                  // obj={taskItem}
                  setTaskEditable={setTaskEditable}
                />
              );
            })}
          </div>
        </div>

        <div>
          <h1 className="text-center">
            {isEdit ? `Update Task ${id} ` : "Add Task "}
            <i className="fa-solid fa-file-circle-plus add-icon"></i>
          </h1>
          <div className="add-task-container">
            <form action="">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Task Here"
                className="text-input"
              />

              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description Here"
                className="text-input"
              />

              <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Enter Priority Here"
                className="text-input"
              />

              <div className="btn-container">
                {isEdit ? (
                  <button
                    type="button"
                    className="btn-add-task"
                    onClick={updateTask}>
                    Update{" "}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-add-task"
                    onClick={addTaskToList}>
                    Add{" "}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
