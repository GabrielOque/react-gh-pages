import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import Task from "./Task";

const ContainHome = ({ isContainHome, setIsContainHome }) => {
  const [task, setTask] = useState([]);
  const [group, setGroup] = useState([]);

  const handleAddGroup = () => {
    const newGroup = {
      id: Math.random(),
      nameGroup: Math.random(),
      descriptionGroup: Math.random(),
      numTask: 5,
      numFinishTask: 12,
    };
    setGroup([...group, newGroup]);
  };

  const handleAddtask = () => {
    const newTask = {
      id: Math.random(),
      titleTask: Math.random(),
      description: Math.random(),
    };
    setTask([...task, newTask]);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="relative flex flex-col justify-between h-full">
          <div>
            <Header />
          </div>
          <div>
            <p
              className="ml-4 text-2xl font-bold text-indigo-500"
              onClick={handleAddGroup}
            >
              Mis proyectos
            </p>
          </div>
          <div className="flex ml-4 overflow-x-auto">
            {group.map((grupo) => (
              <div key={grupo.id}>
                <Cards grupo={grupo} />
              </div>
            ))}
          </div>
          <div>
            <p className="ml-4 text-2xl font-bold text-indigo-500">
              Mis tareas
            </p>
          </div>
          <div className="w-full overflow-auto max-h-60">
            {task.map((t) => (
              <Task t={t} />
            ))}
            <button
              className="absolute flex items-center justify-center text-3xl font-bold text-white bg-blue-800 rounded-full w-14 h-14 right-4 bottom-16"
              onClick={handleAddtask}
            >
              +
            </button>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainHome;
