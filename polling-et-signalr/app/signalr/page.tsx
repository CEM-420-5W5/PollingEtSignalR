"use client";

import React from "react";
import { useEffect } from "react";
import { UselessTask } from "../models/UselessTask";
import TaskView from "../_components/tasks-view";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export default function Home() {

  const [hubConnection, setHubConnection] = React.useState<HubConnection>();
  const [tasks, setTasks] = React.useState<UselessTask[]>([]);
  const [usercount, setUserCount] = React.useState<number>(0);

  useEffect(() => {
      connecttohub();
    }, []);

  function connecttohub() {
    // TODO On doit commencer par créer la connexion vers le Hub
    // TODO On peut commencer à écouter pour les évènements qui vont déclencher des callbacks
    // TODO On doit ensuite se connecter

    let newHubConnection = new HubConnectionBuilder()
    .withUrl('http://localhost:5042/tasks')
    .build();
    // TODO On peut commencer à écouter pour les évènements qui vont déclencher des callbacks
    newHubConnection.on('UserCount', (data) => {
      setUserCount(data);
    });

    newHubConnection.on('TaskList', (data) => {
      setTasks(data);
    });
    // TODO On doit ensuite se connecter
    newHubConnection
      .start()
      .then(() => {
        console.log('La connexion est live!');

      })
      .catch(err => console.log('Error while starting connection: ' + err))

    setHubConnection(newHubConnection);
  }

  function onTaskToggle(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
    hubConnection!.invoke('CompleteTask', id);
  }

  function handleTaskAdd(taskname: string) {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
    hubConnection!.invoke('AddTask', taskname);
  }

  return (
    <div className="p-4">
        <h1>SignalR!</h1>
        <TaskView 
          tasks={tasks} 
          onTaskAdd={handleTaskAdd}
          onTaskToggle={onTaskToggle}
        />
        <p>Nombre d'utilisateurs connectés: {usercount}</p>
    </div>
  );
}