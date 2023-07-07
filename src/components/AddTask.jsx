import React from "react";

export const AddTask = (props) => {
	const {
		addTask,
		inputValue,
		setInputValue,
		editingStatus,
		updateTask,
	} = props;

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = () => {
		addTask(inputValue);
		setInputValue("");
	};

	return (
		<section className="addTask flex-container">
			<input
				className="taskInput"
				type="text"
				placeholder="add task"
				autoComplete="off"
				maxLength={24}
				value={inputValue}
				onChange={handleChange}
			/>
			{editingStatus ? (
				<button
					className="btn"
					type="submit"
					onClick={() => updateTask()}
				>
					Update
				</button>
			) : (
				<button
					className="btn"
					type="submit"
					onClick={handleSubmit}
				>
					Add
				</button>
			)}
		</section>
	);
};
