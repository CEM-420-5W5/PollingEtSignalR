"use client";

import React, { useEffect } from "react";
import TaskView from "../_components/tasks-view";
import { UselessTask } from "../models/UselessTask";

export default function Home() {

  const [tasks, setTasks] = React.useState<UselessTask[]>([]);

  useEffect(() => {
    updateTasks();
  }, []);

  function handleTaskAdd(taskName: string) {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)
  }

  function onTaskToggle(id: number, completed: boolean) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)

    let tasksCopy : UselessTask[] = [...tasks];    
    tasksCopy.find(task => task.id === id)!.completed = completed;
    setTasks(tasksCopy);
  }

  async function updateTasks() {
    let testTasks = new Array<UselessTask>(
      { id: 1, text: "Test Task 1", completed: false },
      { id: 2, text: "Test Task 2", completed: true });
    setTasks(testTasks);
    // TODO: Faire une première implémentation simple avec un appel au serveur pour obtenir la liste des tâches
    // TODO: UNE FOIS QUE VOUS AVEZ TESTER AVEC DEUX CLIENTS: Utiliser le polling pour mettre la liste de tasks à jour chaque seconde
  }

  return (
    <div className="p-4">
        <h1>Polling!</h1>
        <TaskView 
          tasks={tasks} 
          onTaskAdd={handleTaskAdd}
          onTaskToggle={onTaskToggle}
        />
    </div>

  );
}