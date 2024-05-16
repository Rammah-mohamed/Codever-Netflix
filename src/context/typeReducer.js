const TypeReducer = (state, action) => {
	switch (action.type) {
		case "movie": {
			return {
				type: "movie",
			};
		}
		case "show": {
			return {
				type: "show",
			};
		}
		default:
			return state;
	}
};

export default TypeReducer;
