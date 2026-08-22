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
		const _res = await fetch("../js/data/sets.json");
		const _jso = await _res.json();

		console.log(_jso);
	} catch (e) {
		const _res = await fetch("../js/data/sets.json");
		if (e instanceof SyntaxError) {
			console.log("could not parse: ", _res);
			console.log(e.cause);
			console.log(e.message);
		}
	}
});
