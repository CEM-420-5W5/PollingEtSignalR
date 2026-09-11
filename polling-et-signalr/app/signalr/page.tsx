"use client";

import React from "react";
import { useEffect } from "react";
import { UselessTask } from "../models/UselessTask";
import TaskView from "../_components/tasks-view";

export default function Home() {

  const [tasks, setTasks] = React.useState<UselessTask[]>([]);

  useEffect(() => {
      connecttohub();
    }, []);

  function connecttohub() {
    let testTasks = new Array<UselessTask>(
          { id: 1, text: "Test Task 1", completed: false },
          { id: 2, text: "Test Task 2", completed: true });
        setTasks(testTasks);
    // TODO On doit commencer par créer la connexion vers le Hub
    // TODO On peut commencer à écouter pour les messages qui vont déclencher des callbacks (Il y a seulement un message pour commencer)
    // TODO On doit ensuite se connecter
  }

  function onTaskToggle(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
    let tasksCopy : UselessTask[] = [...tasks];    
    tasksCopy.find(task => task.id === id)!.completed = true;
    setTasks(tasksCopy);
  }

  function handleTaskAdd() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
  }

  return (
    <div className="p-4">
        <h1>SignalR!</h1>
        <TaskView 
          tasks={tasks} 
          onTaskAdd={handleTaskAdd}
          onTaskToggle={onTaskToggle}
        />
    </div>
  );
}