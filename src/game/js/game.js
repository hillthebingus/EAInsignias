/** @format */

// This should be changed to ../../../data/names.json in production.
const fetch_url = "https://hillthebingus.github.io/EAInsignias/data/names.json";

// Triggered when the user clicks Confirmar or presses enter.
function on_input() {
	console.log("He replied: ", "button-response".value);
}

// Hooking the event to the handler.
"button-confirm".addEventListener("click", on_input);
document.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		on_input();
	}
});

// Entry point for script.
document.addEventListener("DOMContentLoaded", async () => {
	try {
		const res = await fetch(fetch_url);
		const jso = await res.json();

		console.log(jso);
	} catch (e) {
		const res = await fetch(fetch_url);
		if (e instanceof SyntaxError) {
			console.log("could not parse: ", res);
			console.log(e.cause);
			console.log(e.message);
		}
	}
});
