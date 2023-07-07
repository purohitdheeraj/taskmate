import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import "./App.css";
import { createUniqueId, getDateAndTime } from "./utils";

function App() {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [editingStatus, setEditingStatus] = useState(false);
	const [currentId, setCurrentId] = useState(null);

	const addTask = (inputValue) => {
		const newTask = {
			id: createUniqueId(),
			title: inputValue,
			timestamp: getDateAndTime(),
		};
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	const deleteTask = (id) => {
		const filteredArr = tasks.filter(
			(task) => task.id !== id
		);
		setTasks(filteredArr);
		setEditingStatus(false);
		setInputValue("");
	};

	const updateTask = () => {
		setTasks((prevTasks) => {
			return prevTasks.map((prevTask) => {
				return prevTask.id === currentId
					? {
							...prevTask,
							title: inputValue,
							timestamp: getDateAndTime(),
					  }
					: prevTask;
			});
		});
		setEditingStatus(false);
		setInputValue("");
	};

	const editTask = (id) => {
		setEditingStatus(true);
		setCurrentId(id);
		const selectedTask = tasks.find(
			(task) => task.id === id
		);
		setInputValue(selectedTask.title);
	};

	return (
		<div className="App">
			<Header />
			<AddTask
				addTask={addTask}
				inputValue={inputValue}
				setInputValue={setInputValue}
				editingStatus={editingStatus}
				updateTask={updateTask}
			/>
			<ShowTask
				tasks={tasks}
				deleteTask={deleteTask}
				editTask={editTask}
			/>
		</div>
	);
}

export default App;
