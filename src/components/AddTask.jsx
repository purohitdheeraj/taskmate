import React from "react";

export const AddTask = (props) => {
	const {
		addTask,
		inputValue,
		setInputValue,
		editingStatus,
		updateTask,
		inputError,
		setInputError,
	} = props;

	const handleChange = (e) => {
		setInputValue(e.target.value);
		setInputError(false);
	};

	const handleSubmit = (e) => {
		if (inputValue.trim().length > 0) {
			addTask(inputValue);
			setInputError(false);
		} else {
			setInputError(true);
		}
		setInputValue("");
	};

	const handleKeyDown = (event) => {
		if (inputValue.trim("").length > 0) {
			if (event.key === "Enter") {
				addTask(inputValue);
				setInputValue("")
			}
			setInputError(false);
		} else {
			setInputError(true);
		}
		
	};

	return (
		<>
			{inputError && (
				<small
					className="flex-container"
					style={{ color: "red", justifyContent: "center" }}
				>
					`check your input :-)`
				</small>
			)}
			<section className="addTask flex-container">
				<input
					className="taskInput"
					type="text"
					placeholder="add task"
					autoComplete="off"
					maxLength={24}
					value={inputValue}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
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
		</>
	);
};
