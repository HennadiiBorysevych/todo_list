import create, { State, StateCreator } from "zustand";

import { generateId } from "../helpers";
interface Task {
  id: string;
  title: string;
  createdAt: number;
}
interface ToDoStore {
  tasks: Task[] | undefined;
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

function isToDoStore(store: any): store is ToDoStore {
  return "tasks" in store;
}

const localStorageUpdate =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (nextState, ...args) => {
        if (isToDoStore(nextState)) {
          window.localStorage.setItem("tasks", JSON.stringify(nextState.tasks));
        }
        set(nextState, ...args);
      },
      get,
      api
    );

function getCurrentState() {
  try {
    const currentState = JSON.parse(
      window.localStorage.getItem("tasks") || "[]"
    ) as Task[];
    return currentState;
  } catch (error) {
    const state = window.localStorage.setItem("tasks", "[]");
    return state;
  }
}

export const useToDoStore = create<ToDoStore>(
  localStorageUpdate((set, get) => ({
    tasks: getCurrentState(),
    createTask: (title) => {
      const { tasks } = get();
      const newTask = {
        id: generateId(),
        title,
        createdAt: Date.now(),
      };
      set({ tasks: [newTask, ...tasks] });
    },
    updateTask: (id: string, title: string) => {
      const { tasks } = get();
      set({
        tasks: tasks.map((task) => ({
          ...task,
          title: task.id === id ? title : task.title,
        })),
      });
    },
    removeTask: (id: string) => {
      const { tasks } = get();
      set({
        tasks: tasks.filter((task) => task.id !== id),
      });
    },
  }))
);
