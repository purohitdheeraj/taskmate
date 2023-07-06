import React from "react";

export const ShowTask = () => {
	return (
		<section className="showTask">
			<div className="heading">
				<div className="title">
					<h2 className="text">Todo</h2>
					<span className="count">0</span>
				</div>

				<button className="btn btn-clearAll">
					Clear All
				</button>
			</div>
		</section>
	);
};
