import InsigniaSet from "./data/sets.json";

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
	console.log(InsigniaSet);
});
