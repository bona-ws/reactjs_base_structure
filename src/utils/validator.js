export const isEmpty = (val) => {
	if (val == null || (val === "" && val.replace(" ", "") === "")) return true;
	return false;
};

export const isEmail = (val) => {
	// eslint-disable-next-line no-useless-escape
	if (
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
			val
		)
	)
		return true;
	return false;
};
