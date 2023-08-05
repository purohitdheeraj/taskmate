export const getDateAndTime = () => {
	let date = new Date();
	return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
};

export const createUniqueId = () => {
	const characters = "abcdefghijklmnopqrstuvwxyz123456789";
	let uniqueCharId = "";

	for (let i = 0; i < 6; i++) {
		let randomNumber = Math.trunc(
			Math.random() * characters.length
		);
		uniqueCharId += characters[randomNumber];
	}

	return uniqueCharId;
};
