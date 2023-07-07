import React from "react";

export const ShowTask = (props) => {
	const { tasks, deleteTask, editTask } = props;

	const cardsEl = tasks.map((task) => {
		return (
			<div className="card" key={task.id}>
				<div className="cardInfo">
					<p className="cardTitle">{task.title}</p>
					<span className="date">{task.timestamp}</span>
				</div>

				<div className="cardActions">
					<span
						className="cardIcon"
						onClick={(e) => editTask(task.id)}
					>
						📝
					</span>
					<span
						className="cardIcon"
						onClick={() => deleteTask(task.id)}
					>
						🗑️
					</span>
				</div>
			</div>
		);
	});
	return (
		<section className="showTask">
			<div className="heading flex-container">
				<div className="title flex-container">
					<h2 className="text">Todo</h2>
					<span className="count">{tasks.length}</span>
				</div>

				<button className="btn btn-clearAll">
					Clear All
				</button>
			</div>
			<div className="cardsWrapper flex-container">
				{cardsEl}
			</div>
		</section>
	);
};
