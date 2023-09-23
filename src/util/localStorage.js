export const saveListToLocalStorage = (tasks) => {
    localStorage.setItem("motiveminder", JSON.stringify(tasks));
  };