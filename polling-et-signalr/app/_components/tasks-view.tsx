"use client";

import React, { use } from "react";
import { Field, FieldLabel, Input } from "ui-exercices-5w5"
import { UselessTask } from "../models/UselessTask";

export interface TaskViewProps {
    onTaskAdd?: (taskName: string) => void;
    onTaskToggle?: (taskId: number) => void;
    tasks: UselessTask[];
}

export default function TaskView({ onTaskAdd, onTaskToggle, tasks }: TaskViewProps) {
  const [taskName, setTaskName] = React.useState("");

  const handleAddTask = () => {
    if (onTaskAdd) {
      onTaskAdd(taskName);
    }
    setTaskName("");
  };

  const handleTaskToggle = (taskId: number) => {
    if (onTaskToggle) {
      onTaskToggle(taskId);
    }
  };

  return (
    <div className="p-4">
        <Field className="mb-4">
            <FieldLabel htmlFor="input-field-username">Nom de la tâche</FieldLabel>
            <Input
                id="input-field-username"
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Entrez le nom de la tâche"
            />      
        </Field>

        <div className="">
            <button onClick={handleAddTask} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition">Ajouter une tâche</button>
        </div>
        <br></br>
        <div className="p-4 border-t border-slate-200">
            <h3 className="text-sm font-semibold mb-3">Tâches</h3>
            {tasks.length === 0 ? (
                <p className="text-sm text-slate-500">Aucune tâche</p>
            ) : (
                <ul className="space-y-2">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`task-${task.id}`}
                                checked={task.completed}
                                disabled={task.completed}
                                onChange={(e) => handleTaskToggle(task.id)}
                                className="w-4 h-4 text-blue-600 rounded"
                            />
                            <label htmlFor={`task-${task.id}`} className="ml-2 text-sm">
                                {task.text}
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
}
