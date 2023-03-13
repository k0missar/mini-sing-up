// Функция проверки полей password и confirm password на одинаковый пароль
let password;
let confirmPassword;
function pass(event) {
	if (event.target.name === "password") {
		password = event.target.value;
	}
	if (event.target.name === "confirm-password") {
		confirmPassword = event.target.value;
	}
}

// Функция обработки клика по кнопке
function submitForm(event) {
	event.preventDefault();

	const button = document.querySelector(".registration__form-button");
	const valid = Array.prototype.slice.call(
		document.querySelectorAll(".registration__form-input")
	);
	const newValid = valid
		.map((item) => item.validity.valid)
		.find((item) => item === false);

	// Функция проверки наличия незаполненных полей
	function validItemForm() {
		function bad() {
			if (!newValid && newValid !== undefined) {
				button.classList.add("error");
			}
		}
		button.classList.remove("error");
		setTimeout(bad, 5);
	}

	// Функция вывода сообщения "Не верный пороль" или "Спасибо за регистрацию"
	function messageForm(message, additionalMessage) {
		document.querySelector(".registration__header").textContent = "";
		const form = document.querySelector(".registration__form");
		let title = document.createElement("h1");
		title.classList.add("registration__well-title");
		title.textContent = message;
		let paragraph = document.createElement("p");
		paragraph.classList.add("registration__well-paragraph");
		paragraph.textContent = additionalMessage;
		form.textContent = "";
		const block = document.createElement("div");
		block.appendChild(title);
		block.appendChild(paragraph);
		form.appendChild(block);
		button.remove();
	}

	if (newValid === false) {
		return validItemForm();
	}

	if (password !== confirmPassword) {
		return messageForm(
			"The password was entered incorrectly",
			"The passwords you entered do not match"
		);
	}

	return messageForm("Thank You!", "you registered!");
}
