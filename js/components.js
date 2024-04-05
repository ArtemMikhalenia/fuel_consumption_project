const MainTitle = {
	render: () => {
		return `
    <h1 class="main-title animate__animated animate__slideInDown">Расчет топлива для лентяев</h1>
    `;
	},
};

const RichyBlock = {
	render: () => {
		return `
    <section class="richy-block animate__animated animate__zoomIn">
    <h2>А может в уме посчитаешь?</h2>
        <img src="../images/photo_2023-11-03_15-58-19.jpg" alt="richy">
    </section>`;
	},
};

const AddBlock = {
	render: () => {
		return `
    <form class="add-block">
        <label class="label animate__animated animate__slideInLeft" for="add-distance">Сколько проехала километров</label>
        <input type="number" class="add-distance animate__animated animate__slideInLeft" id="add-distance" required>
        <label class="label animate__animated animate__slideInRight" for="add-gallon">Кол-во литров топлива на 100 км</label>
        <input type="number" class="add-gallon animate__animated animate__slideInRight" id="add-gallon" required>
        <button type="button" class="count-button animate__animated animate__slideInLeft" disabled>Рассчитать</button>
    </form>
	`;
	},
};

const ListBlock = {
	render: () => {
		return `
    <section class="result-block">
        <ul class="result">
        </ul>
    </section>
	`;
	},
};

const TotalBlock = {
	render: () => {
		return `
    <div class="total">Итого: <span class="total-sum">0</span> руб.</div>
      <button class="clear-btn animate__animated animate__slideInUp">Очистить список</button>
	`;
	},
};

const ListItem = {
	render: (
		distance,
		date,
		total,
		lPer100km,
		lPer1km,
		lPer100m,
		lPer1m,
		key
	) => {
		return `
  <li class="list-item" data-key="${key}">
  <span class="date">Дата записи: ${date}</span>
  <span class="data">
    <span>Расход на ${distance} км: <span class="fuel-total">${total} л</span></span>
    <span>Расход на 100 км: <span class="fuel-per-100km">${lPer100km} л</span></span>
    <span>Расход на 1 км: <span class="fuel-per-1km">${lPer1km} л</span></span>
    <span>Расход на 100 м: <span class="fuel-per-100m">${lPer100m} л</span></span>
    <span>Расход на 1 м: <span class="fuel-per-1m">${lPer1m} л</span></span>
  </span>
  <span class="buttons-block">
      <button class="delete-btn">Удалить</button>
    </span>
  </li>
  
  
  `;
	},
};

export { MainTitle, AddBlock, ListBlock, TotalBlock, ListItem, RichyBlock };
