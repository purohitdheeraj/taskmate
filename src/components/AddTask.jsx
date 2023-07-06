import React from "react";

export const AddTask = () => {
	return (
		<section className="addTask flex-container">
			<input
				className="taskInput"
				type="text"
				placeholder="add task"
				autoComplete="off"
				maxLength={24}
			/>
			<button className="btn" type="submit">
				Add
			</button>
		</section>
	);
};
