const root = document.documentElement;
const editProfileForm = document.querySelector("#edit-profile-form");

/* Form fields */
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const birthDateInput = document.querySelector("#birth-date-input");
const biographyInput = document.querySelector("#biography-input");
const themeColorInput = document.querySelector("#theme-color-input");
const avatarInput = document.querySelector("#avatar-input");
/* */

/* Dynamic content */
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const birthDate = document.querySelector("#birth-date");
const biography = document.querySelector("#biography");
const avatar = document.querySelector(".avatar");
/* */
// console.log(sessionStorage.getItem("first-name"));

function updateProfile() {
	if (sessionStorage.getItem("first-name") !== null) {
		if (firstNameInput) firstNameInput.value = sessionStorage.getItem("first-name");
		if (firstName) firstName.innerHTML = sessionStorage.getItem("first-name");
	}
	if (sessionStorage.getItem("last-name") !== null) {
		if (lastNameInput) lastNameInput.value = sessionStorage.getItem("last-name");
		if (lastName) lastName.innerHTML = sessionStorage.getItem("last-name");
	}
	if (sessionStorage.getItem("last-name") !== null) {
		if (birthDateInput) birthDateInput.value = sessionStorage.getItem("birth-date");
		if (birthDate) birthDate.innerHTML = sessionStorage.getItem("birth-date");
	}
	if (sessionStorage.getItem("last-name") !== null) {
		if (biographyInput) biographyInput.value = sessionStorage.getItem("biography");
		if (biography) biography.innerHTML = sessionStorage.getItem("biography");
	}
	if (sessionStorage.getItem("theme-color") !== null) {
		if (themeColorInput) themeColorInput.value = sessionStorage.getItem("theme-color");
		root.style.setProperty("--theme-color", sessionStorage.getItem("theme-color"));
	}
	if (sessionStorage.getItem("avatar") !== null) {
		if (avatarInput) avatarInput.value = sessionStorage.getItem("avatar");
		if (avatar) avatar.style.backgroundImage = "url('../img/" + sessionStorage.getItem("avatar") + "')";
	}
}

if (editProfileForm) {
	editProfileForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const userFormData = new FormData(editProfileForm);

		for (const [name, value] of userFormData.entries()) {
			sessionStorage.setItem(name, value);
		}

		updateProfile();
	});
}

// if (editProfileForm) {
// 	editProfileForm.addEventListener("submit", (event) => {
// 		event.preventDefault();

// 		sessionStorage.setItem("first-name", firstNameInput.value);
// 		sessionStorage.setItem("last-name", lastNameInput.value);

// 		updateProfile();
// 	});
// }

updateProfile();
