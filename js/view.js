import {
	MainTitle,
	AddBlock,
	ListBlock,
	TotalBlock,
	ListItem,
} from "./components.js";

function View() {
	let myContainer = null;
	let routesObj = null;

	let listBlock = null;
	let sumsArray = null;

	this.init = function (container, routes) {
		myContainer = container;
		routesObj = routes;
	};

	this.renderContent = function (hashPageName) {
		let routeName = "default";

		if (hashPageName.length > 0) {
			routeName = hashPageName in routesObj ? hashPageName : "error";
		}

		window.document.title = routesObj[routeName].title;
		myContainer.innerHTML = routesObj[routeName].render(`${routeName}`);

		listBlock = document.querySelector(".result");
	};

	this.addListItem = function (
		distance,
		date,
		total,
		lPer100km,
		lPer1km,
		lPer100m,
		lPer1m,
		newKey
	) {
		if (listBlock)
			listBlock.innerHTML += ListItem.render(
				distance,
				date,
				total,
				lPer100km,
				lPer1km,
				lPer100m,
				lPer1m
			);
		this.enableAddBtn();

		document.querySelector(".add-distance").value = "";
		document.querySelector(".add-gallon").value = "";
	};

	this.removeListItem = function (event) {
		event.target.closest(".list-item").remove();
	};

	this.renderListItems = function (listItem) {
		if (listBlock) {
			for (let key in listItem) {
				const item = listItem[key];
				listBlock.innerHTML += ListItem.render(
					item.distance,
					item.date,
					item.total,
					item.lPer100km,
					item.lPer1km,
					item.lPer100m,
					item.lPer1m,
					key
				);
			}
		}
	};

	this.enableAddBtn = function (state) {
		if (state) {
			document.querySelector(".count-button").removeAttribute("disabled");
		} else {
			document
				.querySelector(".count-button")
				.setAttribute("disabled", "disabled");
		}
	};
}

export default View;
