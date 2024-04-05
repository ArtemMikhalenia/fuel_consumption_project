import {
	getDatabase,
	ref,
	set,
	update,
	get,
	child,
	push,
	remove,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

const firebaseConfig = {
	apiKey: "AIzaSyBMuqYF5WtA-7DrTf3R0DOrn1bQoIKB5SY",
	authDomain: "fuel-project-24b24.firebaseapp.com",
	projectId: "fuel-project-24b24",
	databaseURL:
		"https://fuel-project-24b24-default-rtdb.europe-west1.firebasedatabase.app/",
	storageBucket: "fuel-project-24b24.appspot.com",
	messagingSenderId: "801743509994",
	appId: "1:801743509994:web:0a49e0fff358219756ba93",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Model() {
	let myView = null;

	this.init = function (view) {
		myView = view;
	};

	this.updateState = function (_pageName) {
		myView.renderContent(_pageName);
	};

	this.addListItem = function (distance, gallon) {
		const date = new Date();
		const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
			date.getMonth() + 1
		)
			.toString()
			.padStart(2, "0")}-${date.getFullYear()} ${date
			.getHours()
			.toString()
			.padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
			.getSeconds()
			.toString()
			.padStart(2, "0")}`;

		const lPer1m = gallon / 100000;
		const lPer1km = gallon / 100;
		const total = lPer1km * distance;
		const lPer100km = gallon;
		const lPer100m = gallon / 10000;

		const list = {
			distance: distance,
			gallon: gallon,
			date: formattedDate,
			total: total,
			lPer100km: lPer100km,
			lPer1km: lPer1km,
			lPer100m: lPer100m,
			lPer1m: lPer1m,
		};

		const newKey = push(child(ref(database), `List/`), list).key;
		myView.addListItem(
			distance,
			formattedDate,
			total,
			lPer100km,
			lPer1km,
			lPer100m,
			lPer1m,
			newKey
		);
	};

	this.loadListItems = async function () {
		const snapshot = await get(child(ref(database), "List"));
		if (snapshot.exists()) {
			const listItem = snapshot.val();
			myView.renderListItems(listItem);
		}
	};

	this.removeListItem = function (event) {
		let targetEl = event.target.closest(".list-item");
		let targetKey = targetEl.getAttribute("data-key");

		remove(child(ref(database), `List/${targetKey}`));
		myView.removeListItem(event);
	};

	this.enableAddBtn = function (state) {
		state ? true : false;
		myView.enableAddBtn(state);
	};
}

export default Model;
