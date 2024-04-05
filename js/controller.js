function Controller() {
	let myContainer = null;
	let myModel = null;

	function updateState() {
		const hashPageName = location.hash.slice(1).toLowerCase();
		myModel.updateState(hashPageName);
		myModel.loadListItems();
		myModel.enableAddBtn();

		const addButton = document.querySelector(".count-button");

		addButton.addEventListener("click", addListItem);

		const listBlock = document.querySelector(".result");
		listBlock.addEventListener("click", (event) => {
			if (event.target.className === "delete-btn") {
				removeListItem(event);
			}
		});

		const nameInput = document.querySelector(".add-distance");
		const sumInput = document.querySelector(".add-gallon");

		nameInput.addEventListener("input", enableAddBtn);
		sumInput.addEventListener("input", enableAddBtn);
	}

	function addListItem() {
		const distanceInput = document.querySelector(".add-distance");
		const gallonInput = document.querySelector(".add-gallon");
		myModel.addListItem(distanceInput.value, gallonInput.value);
	}

	function removeListItem(event) {
		myModel.removeListItem(event);
	}

	function enableAddBtn() {
		const nameInput = document.querySelector(".add-distance");
		const sumInput = document.querySelector(".add-gallon");

		if (nameInput.value && sumInput.value) {
			myModel.enableAddBtn(true);
		} else {
			myModel.enableAddBtn(false);
		}
	}

	return {
		init: function (container, model) {
			myContainer = container;
			myModel = model;

			window.addEventListener("hashchange", updateState);
			updateState();
		},
	};
}

export default Controller;
