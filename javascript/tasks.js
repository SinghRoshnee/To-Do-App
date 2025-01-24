let predefinedArr = [
  {
    id: 4,
    title: "Delete an Unnecessary Task",
    description: "Experiment with the delete option by removing a test task.",
    status: "cancled",
    dateTime: new Date().toLocaleString(),
  },
  {
    id: 2,
    title: "Mark a Task as Completed",
    description:
      "Try marking a task as completed to see how the status updates work.",
    status: "completed",
    dateTime: new Date().toLocaleString(),
  },
  {
    id: 3,
    title: "Cancel a Scheduled Task",
    description:
      "Test the cancel feature by canceling a scheduled task to see how it behaves.",
    status: "deleted",
    dateTime: new Date().toLocaleString(),
  },
  {
    id: 1,
    title: "Explore Task Tracker!",
    description:
      "Welcome to this new to-do tasks tracker app! Explore its rich features. Start by giving it a custom name.",
    status: "pending",
    dateTime: new Date().toLocaleString(),
  },
];

export let tasks = [];

let todoTasks = localStorage.getItem("todoTasks");
tasks = JSON.parse(todoTasks) || predefinedArr;
console.log(tasks);

export function addlocalStorage() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}
