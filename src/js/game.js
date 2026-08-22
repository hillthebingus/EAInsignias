function on_input() {
	inpt = document.getElementById("response").value;
	console.log("He replied: ", inpt);
}

// Registering the user's input.
document.getElementById("confirm-button").addEventListener("click", on_input);
document.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		on_input();
	}
});

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const _res = await fetch("./data/sets.json");
		const _jso = await _res.json();

		console.log(_jso);
	} catch (e) {
		if (e instanceof SyntaxError) {
			console.log("could not parse: ", response);
			console.log(e.cause);
			console.log(e.message);
		}
	}
});
